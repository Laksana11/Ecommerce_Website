// components/HomePage.js
import React from "react";
import { Typography, Box } from "@mui/material";
import ProductList from "../components/product/ProductList";

const HomePage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the E-Commerce App
      </Typography>
      <Typography variant="body1">
        Explore a wide variety of products and enjoy shopping!
      </Typography>
      <ProductList />
    </Box>
  );
};

export default HomePage;
