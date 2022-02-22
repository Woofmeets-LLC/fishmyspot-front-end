import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slices/authSlice";
import modalsSliceReducer from "./slices/modalsSlice";


export const store = configureStore({
    reducer: {
      modals: modalsSliceReducer,
      auth: authSliceReducer
    },
  });
  


export default store