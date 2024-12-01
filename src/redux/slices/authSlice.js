import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("authUser")) || null,
  feedback: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(users));
      state.user = action.payload;
      state.feedback = "Signup successful!";
      state.error = null;
    },
    login: (state, action) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const foundUser = users.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );

      if (foundUser) {
        localStorage.setItem("authUser", JSON.stringify(foundUser));
        state.user = foundUser;
        state.feedback = "Login successful!";
        state.error = null;
      } else {
        state.error = "Invalid email or password";
      }
    },
    logout: (state) => {
      localStorage.removeItem("authUser");
      state.user = null;
      state.error = null;
    },
    clearFeedback: (state) => {
      state.feedback = null;
    },
  },
});

export const { signup, login, logout, clearFeedback } = authSlice.actions;
export default authSlice.reducer;
