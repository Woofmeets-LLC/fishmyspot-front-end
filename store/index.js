import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slices/authSlice";
import autocompletetionSlice from "./slices/autocompletetionSlice";
import bookingDataSliceReducer from "./slices/bookingDataSlice";
import listSpotContentsSliceReducer from "./slices/listSpotContentsSlice";
import modalsSliceReducer from "./slices/modalsSlice";
import stripeAccountSliceReducer from "./slices/stripeAccountSlice";


export const store = configureStore({
    reducer: {
        modals: modalsSliceReducer,
        auth: authSliceReducer,
        listSpotContents: listSpotContentsSliceReducer,
        place: autocompletetionSlice,
        bookingData: bookingDataSliceReducer, 
        stripeAccount: stripeAccountSliceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});


export default store