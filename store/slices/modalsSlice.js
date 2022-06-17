import { createSlice } from '@reduxjs/toolkit';

const modalsSlice = createSlice({
  name: 'modals',
  initialState: {
    showLoginModal: false,
    showSignUpModal: false,
    showBankAccountModal: false,
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
    setShowBankAccountModal: (state) => {
      state.showLoginModal = false;
      state.showSignUpModal = false;
      state.showBankAccountModal = true;
    },
    setCloseLoginModal: (state) => {
      state.showLoginModal = false;
    },
    setCloseSignUpModal: (state) => {
      state.showSignUpModal = false;
    },
    setCloseBankAccountModal: (state) => {
      state.showBankAccountModal = false;
    },
  },
});

export default modalsSlice.reducer;

export const selectCount = (state) => state.modal;

export const setShowLoginModal = modalsSlice.actions.setShowLoginModal;
export const setShowSignUpModal = modalsSlice.actions.setShowSignUpModal;
export const setShowBankAccountModal =
  modalsSlice.actions.setShowBankAccountModal;
export const setCloseLoginModal = modalsSlice.actions.setCloseLoginModal;
export const setCloseSignUpModal = modalsSlice.actions.setCloseSignUpModal;
export const setCloseBankAccountModal =
  modalsSlice.actions.setCloseBankAccountModal;
