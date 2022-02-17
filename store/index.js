import { configureStore } from "@reduxjs/toolkit";
import modalsSliceReducer from "./slices/modalsSlice";


export const store = configureStore({
    reducer: {
      modals: modalsSliceReducer,
    },
  });
  


export default store