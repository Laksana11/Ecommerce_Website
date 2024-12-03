import { createSlice } from "@reduxjs/toolkit";
import CryptoJS from "crypto-js";
import { toast } from "react-toastify";

const initialState = {
  user: JSON.parse(localStorage.getItem("authUser")) || null,
  feedback: null,
  error: null,
};

const checkPassword = (encryptedPassword, password) => {
  const bytes = CryptoJS.AES.decrypt(
    encryptedPassword,
    process.env.REACT_APP_SECRET_KEY
  );
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  if (decrypted === password) return true;
  else return false;
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
        (user) => user.email === action.payload.email
      );
      if (
        foundUser &&
        checkPassword(foundUser.password, action.payload.password)
      ) {
        localStorage.setItem("authUser", JSON.stringify(foundUser));
        state.user = foundUser;
        state.feedback = "Login successful!";
        state.error = null;
        toast.success("Login successful!");
      } else {
        state.error = "Invalid email or password";
        toast.error("Login Failed!");
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
