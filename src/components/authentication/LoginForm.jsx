import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Grid2,
} from "@mui/material";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/,
      "Password must be at least 8 characters and include uppercase, lowercase, and special characters."
    ),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "var(--body)",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 2, width: "100%" }}
        >
          <TextField
            label="Email"
            type="text"
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

          {error && (
            <Typography
              variant="body2"
              color="error"
              sx={{ mt: 1, mb: 2, textAlign: "left" }}
            >
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "var(--background)" }}
          >
            Login
          </Button>
        </Box>

        <Grid2 container justifyContent="flex-end">
          <Grid2 item>
            <Typography variant="body2" component="p">
              Don't have an account? <a href="/signup">Signup</a>
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};

export default LoginForm;
