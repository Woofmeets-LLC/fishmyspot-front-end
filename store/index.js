import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slices/authSlice";
import listSpotContentsSliceReducer from "./slices/listSpotContentsSlice";
import modalsSliceReducer from "./slices/modalsSlice";


export const store = configureStore({
    reducer: {
      modals: modalsSliceReducer,
      auth: authSliceReducer,
      listSpotContents: listSpotContentsSliceReducer,
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck: false,
    }),
  });
  


export default store