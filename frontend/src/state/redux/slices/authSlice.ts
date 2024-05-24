import { createSlice } from "@reduxjs/toolkit";

let objectValue = null;

const initialState = {
  userInfo: (() => {
    try {
      const storedValue = localStorage.getItem("userInfo");
      return storedValue ? JSON.parse(storedValue) : null;
    } catch (error) {
      objectValue = localStorage.getItem("userInfo");
      return console.log(objectValue);
    }
  })(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

