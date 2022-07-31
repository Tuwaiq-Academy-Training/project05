import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user") || "null");

const initialState = {
  user: user ? user : null,
  isLoading: false,
  isSuccess: false,
};

export const login = createAsyncThunk("user/login", () => {
  const newUser = {
    email: process.env.REACT_APP_EMAIL,
  };
  localStorage.setItem("user", JSON.stringify(newUser));
});
export const logout = createAsyncThunk("user/logout", () => {
  localStorage.removeItem("user");
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isSuccess = true;
      state.isLoading = false;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
      state.isLoading = false;
      state.isSuccess = false;
    });
  },
});

export default userSlice.reducer;
