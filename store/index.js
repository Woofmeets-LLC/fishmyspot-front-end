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
  });
  


export default store