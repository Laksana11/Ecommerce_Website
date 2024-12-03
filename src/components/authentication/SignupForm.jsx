import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/slices/authSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CryptoJS from "crypto-js";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid2,
} from "@mui/material";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/,
      "Password must be at least 8 characters and include uppercase, lowercase, and special characters."
    ),
});

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const hashedPassword = CryptoJS.AES.encrypt(
      data.password,
      process.env.REACT_APP_SECRET_KEY
    ).toString();
    const dataWithHashedPassword = { ...data, password: hashedPassword };

    dispatch(signup(dataWithHashedPassword));
    reset();
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: 3,
          padding: 4,
          borderRadius: 2,
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Signup
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 1, width: "100%" }}
        >
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "var(--background)" }}
          >
            Signup
          </Button>
        </Box>

        <Grid2 container justifyContent="flex-end">
          <Grid2 item>
            <Typography variant="body2" component="p">
              Already have an account? <a href="/login">Login</a>
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};

export default SignupForm;
