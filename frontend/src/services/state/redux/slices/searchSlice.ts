// searchSlice.js
import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     userInfo: localStorage.getItem("userInfo")
//       ? JSON.parse(localStorage.getItem("userInfo"))
//       : null,
//   };

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      return action.payload;
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
