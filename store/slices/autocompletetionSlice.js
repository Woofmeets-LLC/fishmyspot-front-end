import { createSlice } from "@reduxjs/toolkit";



const autocompletetionSlice = createSlice({
    name: "place",
    initialState: {
        isFirst: false,
        latLng: null,
    },
    reducers: {
        set: (state, {payload}) => {
            state.isFirst = payload.isFirst;
            state.latLng = payload.latLng;
        },
    },
});

export default autocompletetionSlice.reducer;

export const set = autocompletetionSlice.actions.set;
