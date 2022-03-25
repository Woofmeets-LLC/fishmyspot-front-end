import { createSlice } from "@reduxjs/toolkit";

const bookingDataSlice = createSlice({
    name: "bookingData",
    initialState: {
        'pond-id': '',
        pondData: {},
        date: '',
        dayRates: {},
        dayType: "",
        experience: '',
        time: '',
        serviceFee: '',
        total: ''
    },
    reducers: {
        setBookingData: (state, action) => {
            state['pond-id'] = action.payload['pond-id'];
            state.pondData = action.payload.pondData;
            state.date = action.payload.date;
            state.dayRates = action.payload.dayRates;
            state.dayType = action.payload.dayType;
            state.experience = action.payload.experience;
            state.time = action.payload.time;
            state.serviceFee = action.payload.serviceFee;
            state.total = action.payload.total;
        },
    },
});

export default bookingDataSlice.reducer;

export const selectCount = (state) => state.modal;

export const setBookingData = bookingDataSlice.actions.setBookingData;