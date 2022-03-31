import { createSlice } from "@reduxjs/toolkit";


const stripeAccountSlice = createSlice({
    name: "stripeAccount",
    initialState: {
        attributes: null,
        id: null,
        type: null,
        isTransferActivated: null,
        loaded: false,
    },
    reducers: {
      setStripeAccount: (state,{payload}) => {
        state.attributes = payload.attributes;
        state.id = payload.id;
        state.type = payload.type;
        state.isTransferActivated = payload.isTransferActivated;
        state.loaded = payload.loaded;
      },
    },
  });

  
export default stripeAccountSlice.reducer;

export const selectCount = (state) => state.stripeAccount;

export const setStripeAccount = stripeAccountSlice.actions.setStripeAccount;


