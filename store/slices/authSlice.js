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
});

export default authSlice.reducer;

export const logoutAction = authSlice.actions.logout;