import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { Goods: "All", Bookmark: "All", CurrentPage: "MainPage" },
};

export const CurrentFilterSlice = createSlice({
  name: "CurrentFilter",
  initialState,
  reducers: {
    updateGoodsFilter: (state, action) => {
      state.value.Goods = action.payload;
    },
    updateBookmarkFilter: (state, action) => {
      state.value.Bookmark = action.payload;
    },
    updateCurrentPage: (state, action) => {
      state.value.CurrentPage = action.payload;
    },
  },
});

export const { updateGoodsFilter, updateBookmarkFilter, updateCurrentPage } =
  CurrentFilterSlice.actions;
export default CurrentFilterSlice.reducer;
