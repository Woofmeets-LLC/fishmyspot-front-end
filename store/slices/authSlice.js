<<<<<<< HEAD
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSdk } from "../../sharetribe/sharetribeSDK";

export const login = createAsyncThunk("auth/verify", async () => {
    let response = "";
    try {
        response = await getSdk()?.currentUser.show();
    } catch (err) {
        response = "";
    }

    return response;
});


const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        user: {},
        isLoading: true,
    },
    reducers: {
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = {};
            getSdk()
                ?.logout()
                ?.then(loginRes => {
                    console.log("Logout successful.")
                })
                ?.catch(err => {
                    console.log("Logout failed.")
                });
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed

        // For Verifying Auth Token
        builder.addCase(login.pending, (state, action) => {
            state.isLoggedIn = false;
            state.user = {};
            state.isLoading = true;
        });

        builder.addCase(login.fulfilled, (state, action) => {
            if (action.payload.data) {
                state.isLoggedIn = true;
                state.user = action.payload.data.data.attributes;
                state.isLoading = false;
            } else {
                state.isLoggedIn = false;
                state.user = {};
                state.isLoading = false;
            }
        });

        builder.addCase(login.rejected, (state, action) => {
            state.isLoggedIn = false;
            state.user = {};
            state.isLoading = false;
        });
    },
=======
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSdk } from '../../sharetribe/sharetribeSDK';

export const login = createAsyncThunk('auth/verify', async () => {
  let response = '';
  try {
    response = await getSdk()?.currentUser.show();
  } catch (err) {
    response = '';
  }

  return response;
});

export const updateUser = createAsyncThunk('auth/updateUser', async () => {
  let response = '';
  try {
    response = await getSdk()?.currentUser.show();
  } catch (err) {
    response = '';
  }

  return response;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: {},
    isLoading: true,
  },
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = {};
      getSdk()
        ?.logout()
        ?.then((loginRes) => {
          console.log('Logout successful.');
        })
        ?.catch((err) => {
          console.log('Logout failed.');
        });
    },
    updateFavoriteList: (state, { payload }) => {
      getSdk()
        ?.currentUser?.updateProfile({
          publicData: {
            favoriteList: [
              ...state.user.profile.publicData.favoriteList,
              payload.id,
            ],
          },
        })
        .then((res) => {
          console.log(
            res?.data?.data?.attributes?.profile?.publicData?.favoriteList
          );
        });
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed

    // For Verifying Auth Token
    builder.addCase(login.pending, (state, action) => {
      state.isLoggedIn = false;
      state.user = {};
      state.isLoading = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload.data) {
        state.isLoggedIn = true;
        state.user = action.payload.data.data.attributes;
        state.isLoading = false;
      } else {
        state.isLoggedIn = false;
        state.user = {};
        state.isLoading = false;
      }
    });

    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.user = {};
      state.isLoading = false;
    });

    builder.addCase(updateUser.fulfilled, (state, action) => {
      if (action.payload.data) {
        state.user = action.payload.data.data.attributes;
      }
    });
  },
>>>>>>> 34faf2f326a4a9ba4c84a8522ac5ccdd389dab11
});

export default authSlice.reducer;

export const logoutAction = authSlice.actions.logout;
<<<<<<< HEAD
=======
export const updateFavoriteList = authSlice.actions.updateFavoriteList;
>>>>>>> 34faf2f326a4a9ba4c84a8522ac5ccdd389dab11
