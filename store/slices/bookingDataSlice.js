import { createSlice } from "@reduxjs/toolkit";

const bookingDataSlice = createSlice({
    name: "bookingData",
    initialState: {
        'pond-id': '',
        date: '',
        dayRates: {},
        dayType: "",
        experience: '',
        time: '',
        total: ''
    },
    reducers: {
        setBookingData: (state, action) => {
            state['pond-id'] = action.payload['pond-id'];
            state.date = action.payload.date;
            state.dayRates = action.payload.dayRates;
            state.dayType = action.payload.dayType;
            state.experience = action.payload.experience;
            state.time = action.payload.time;
            state.total = action.payload.total;
            console.log(action);
        },
    },
});

export default bookingDataSlice.reducer;

export const selectCount = (state) => state.modal;

export const setBookingData = bookingDataSlice.actions.setBookingData;