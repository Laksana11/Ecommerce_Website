import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/slices/authSlice";
import React from "react";
import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { signup } from "./actions"; // Update the path to your signup action
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Signup = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Integrates Yup validation
  });

  const onSubmit = (data) => {
    dispatch(signup(data));
    reset(); // Resets the form after submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="text" placeholder="Name" {...register("name")} />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>

      <div>
        <input type="email" placeholder="Email" {...register("email")} />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
      </div>

      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
