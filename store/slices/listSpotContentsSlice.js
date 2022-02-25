import { createSlice } from "@reduxjs/toolkit";

const listSpotContentsSlice = createSlice({
  name: "listSpotContents",
  initialState: {
    fishes: [],
  },
  reducers: {
    setFishes: (state, actions) => {
      state.fishes = actions.payload;
    },
  },
});

export default listSpotContentsSlice.reducer;

export const selectCount = (state) => state.listSpotContents;

export const setFishes = listSpotContentsSlice.actions.setFishes;