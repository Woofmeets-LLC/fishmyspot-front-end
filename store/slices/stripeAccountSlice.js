import { createSlice } from "@reduxjs/toolkit";


const stripeAccountSlice = createSlice({
    name: "stripeAccount",
    initialState: {
        attributes: null,
        id: null,
        type: null,
        isTransferActivated: null,
    },
    reducers: {
      setStripeAccount: (state,{payload}) => {
        state.attributes = payload.attributes;
        state.id = payload.id;
        state.type = payload.type;
        state.isTransferActivated = payload.isTransferActivated;
      },
    },
  });

  
export default stripeAccountSlice.reducer;

export const selectCount = (state) => state.stripeAccount;

export const setStripeAccount = stripeAccountSlice.actions.setStripeAccount;


