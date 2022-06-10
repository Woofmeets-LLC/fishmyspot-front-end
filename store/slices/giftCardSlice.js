import { createSlice } from '@reduxjs/toolkit';

const giftCardSlice = createSlice({
  name: 'giftCardData',
  initialState: {
    amount: '',
    recipientEmail: '',
    message: '',
    address: {
      city: '',
      country: null,
      line1: '',
      line2: null,
      postal_code: '',
      state: '',
    },
    email: '',
    name: '',
    phone: '',
  },
  reducers: {
    setGiftCardData: (state, action) => {
      for (const key in action.payload) {
        state[key] = action.payload[key];
      }
    },
  },
});

export default giftCardSlice.reducer;

export const setGiftCardData = giftCardSlice.actions.setGiftCardData;
