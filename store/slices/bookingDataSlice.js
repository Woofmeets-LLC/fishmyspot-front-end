import { createSlice } from "@reduxjs/toolkit";

const bookingDataSlice = createSlice({
    name: "bookingData",
    initialState: {
        date: '',
        dayRates: {},
        dayType: "",
        experience: '',
        time: '',
        total: ''
    },
    reducers: {
        setBookingData: (state, action) => {
            state = action.payload;
            console.log(action);
        },
    },
});

export default bookingDataSlice.reducer;

export const selectCount = (state) => state.modal;

export const setBookingData = bookingDataSlice.actions.setBookingData;