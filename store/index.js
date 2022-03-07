import {configureStore} from "@reduxjs/toolkit";
import authSliceReducer from "./slices/authSlice";
import listSpotContentsSliceReducer from "./slices/listSpotContentsSlice";
import modalsSliceReducer from "./slices/modalsSlice";
import autocompletetionSlice from "./slices/autocompletetionSlice";


export const store = configureStore({
    reducer: {
        modals: modalsSliceReducer,
        auth: authSliceReducer,
        listSpotContents: listSpotContentsSliceReducer,
        place: autocompletetionSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});


export default store