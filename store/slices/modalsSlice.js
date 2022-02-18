import { createSlice } from "@reduxjs/toolkit";

const modalsSlice = createSlice({
  name: "modals",
  initialState: {
    showLoginModal: false,
    showSignUpModal:false,
  },
  reducers: {
    setShowLoginModal: (state) => {
      state.showLoginModal = true;
      state.showSignUpModal = false;
    },
    setShowSignUpModal: (state) => {
      state.showLoginModal = false;
      state.showSignUpModal = true;
    },
    setCloseLoginModal: (state) => {
        state.showLoginModal = false;
    },
    setCloseSignUpModal: (state) => {
        state.showSignUpModal = false;
    }
  },
});

export default modalsSlice.reducer;

export const selectCount = (state) => state.modal;

export const setShowLoginModal = modalsSlice.actions.setShowLoginModal;
export const setShowSignUpModal = modalsSlice.actions.setShowSignUpModal;
export const setCloseLoginModal = modalsSlice.actions.setCloseLoginModal;
export const setCloseSignUpModal = modalsSlice.actions.setCloseSignUpModal;
