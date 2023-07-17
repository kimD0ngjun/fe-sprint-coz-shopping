import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const LoadingSlice = createSlice({
  name: "Loading",
  initialState,
  reducers: {
    updateLoading: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateLoading } = LoadingSlice.actions;
export default LoadingSlice.reducer;
