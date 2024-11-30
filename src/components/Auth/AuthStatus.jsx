import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slice/authSlice";

const AuthStatus = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default AuthStatus;
