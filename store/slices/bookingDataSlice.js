import { createSlice } from "@reduxjs/toolkit";

const bookingDataSlice = createSlice({
    name: "bookingData",
    initialState: {
        'pond-id': '',
<<<<<<< HEAD
        pondData: {},
=======
>>>>>>> 34faf2f326a4a9ba4c84a8522ac5ccdd389dab11
        date: '',
        dayRates: {},
        dayType: "",
        experience: '',
        time: '',
<<<<<<< HEAD
        serviceFee: '',
=======
>>>>>>> 34faf2f326a4a9ba4c84a8522ac5ccdd389dab11
        total: ''
    },
    reducers: {
        setBookingData: (state, action) => {
            state['pond-id'] = action.payload['pond-id'];
<<<<<<< HEAD
            state.pondData = action.payload.pondData;
=======
>>>>>>> 34faf2f326a4a9ba4c84a8522ac5ccdd389dab11
            state.date = action.payload.date;
            state.dayRates = action.payload.dayRates;
            state.dayType = action.payload.dayType;
            state.experience = action.payload.experience;
            state.time = action.payload.time;
<<<<<<< HEAD
            state.serviceFee = action.payload.serviceFee;
=======
>>>>>>> 34faf2f326a4a9ba4c84a8522ac5ccdd389dab11
            state.total = action.payload.total;
            console.log(action);
        },
    },
});

export default bookingDataSlice.reducer;

export const selectCount = (state) => state.modal;

export const setBookingData = bookingDataSlice.actions.setBookingData;