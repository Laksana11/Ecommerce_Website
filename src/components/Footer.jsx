import React from "react";
import { Box, Typography, Grid2, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        py: 4,
        mt: 4,
        borderTop: "1px solid #ddd",
      }}
    >
      <Grid2 container spacing={2} justifyContent="center" textAlign="center">
        <Grid2 item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2">
            We offer the best products at the best prices. Your satisfaction is
            our priority.
          </Typography>
        </Grid2>
        <Grid2 item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Box>
            <Link href="/" color="inherit" underline="hover">
              Home
            </Link>
          </Box>
          <Box>
            <Link href="/products" color="inherit" underline="hover">
              Products
            </Link>
          </Box>
          <Box>
            <Link href="/contact" color="inherit" underline="hover">
              Contact Us
            </Link>
          </Box>
        </Grid2>
        <Grid2 item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              <FacebookIcon />
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              <TwitterIcon />
            </Link>
            <Link href="#" color="inherit" sx={{ mx: 1 }}>
              <InstagramIcon />
            </Link>
          </Box>
        </Grid2>
      </Grid2>
      <Typography
        variant="body2"
        sx={{ mt: 2, textAlign: "center", color: "#888" }}
      >
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
