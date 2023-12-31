import { createSlice } from '@reduxjs/toolkit';

const bookingDataSlice = createSlice({
  name: 'bookingData',
  initialState: {
    'pond-id': '',
    pondData: {},
    date: '',
    dayRates: {},
    dayType: '',
    experience: '',
    time: '',
    serviceFee: '',
    total: '',
    'additional-guests': 0,
    // giftCode: '',
    'coupon-discount': 0.0,
    'applied-discount': 0.0,
  },
  reducers: {
    setBookingData: (state, action) => {
      state['pond-id'] = action.payload['pond-id'];
      state.pondData = action.payload.pondData;
      state.date = action.payload.date;
      state.dayRates = action.payload.dayRates;
      state.dayType = action.payload.dayType;
      state.experience = action.payload.experience;
      state['additional-guests'] = action.payload['additional-guests'];
      state.perAdditionalGuestsFee = action.payload.perAdditionalGuestsFee;
      state.time = action.payload.time;
      state.serviceFee = action.payload.serviceFee;
      state.total = action.payload.total;
      state.giftCode = action.payload.giftCode;
      state['coupon-discount'] = action.payload['coupon-discount'];
      state['applied-discount'] = action.payload['applied-discount'];
    },
  },
});

export default bookingDataSlice.reducer;

export const selectCount = (state) => state.modal;

export const setBookingData = bookingDataSlice.actions.setBookingData;
