import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   user: JSON.parse(localStorage.getItem("user")) || null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload;
//       localStorage.setItem("user", JSON.stringify(action.payload));
//     },
//     logout: (state) => {
//       state.user = null;
//       localStorage.removeItem("user");
//     },
//     signup: (state, action) => {
//       state.user = action.payload;
//       localStorage.setItem("user", JSON.stringify(action.payload));
//     },
//   },
// });

// export const { login, logout, signup } = authSlice.actions;

// export default authSlice.reducer;

const initialState = {
  user: JSON.parse(localStorage.getItem("authUser")) || null,
  feedback: null, // Feedback message
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
