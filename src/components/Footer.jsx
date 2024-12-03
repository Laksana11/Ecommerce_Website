import React from "react";
import { Box, Typography, Link } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "var(--background-secondary)",
        color: "var(--text-primary)",
        py: 4,
        px: 2,
        mt: 4,
      }}
    >
      <Grid2
        container
        spacing={4}
        justifyContent="space-between"
        textAlign={{ xs: "center", sm: "left" }}
      >
        {/* Company Section */}
        <Grid2 xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "var(--text-secondary)", textAlign: "left" }}
          >
            Company
          </Typography>
          <Box sx={{ textAlign: "left" }}>
            <Link href="/about" color="var(--text-primary)" underline="hover">
              About Us
            </Link>
          </Box>
          <Box sx={{ textAlign: "left" }}>
            <Link
              href="/services"
              color="var(--text-primary)"
              underline="hover"
            >
              Our Services
            </Link>
          </Box>
          <Box sx={{ textAlign: "left" }}>
            <Link
              href="/privacy-policy"
              color="var(--text-primary)"
              underline="hover"
            >
              Privacy Policy
            </Link>
          </Box>
          <Box sx={{ textAlign: "left" }}>
            <Link
              href="/affiliate"
              color="var(--text-primary)"
              underline="hover"
            >
              Affiliate Program
            </Link>
          </Box>
        </Grid2>

        {/* Get Help Section */}
        <Grid2 xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "var(--text-secondary)", textAlign: "left" }}
          >
            Get Help
          </Typography>
          <Box sx={{ textAlign: "left" }}>
            <Link href="/faq" color="var(--text-primary)" underline="hover">
              FAQ
            </Link>
          </Box>
          <Box sx={{ textAlign: "left" }}>
            <Link
              href="/shipping"
              color="var(--text-primary)"
              underline="hover"
            >
              Shipping
            </Link>
          </Box>
          <Box sx={{ textAlign: "left" }}>
            <Link href="/returns" color="var(--text-primary)" underline="hover">
              Returns
            </Link>
          </Box>
          <Box sx={{ textAlign: "left" }}>
            <Link
              href="/payment-options"
              color="var(--text-primary)"
              underline="hover"
            >
              Payment Options
            </Link>
          </Box>
        </Grid2>

        {/* Online Shop Section */}
        <Grid2 xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "var(--text-secondary)", textAlign: "left" }}
          >
            Online Shop
          </Typography>
          <Box sx={{ textAlign: "left" }}>
            <Link
              href="/shop/watch"
              color="var(--text-primary)"
              underline="hover"
            >
              Watch
            </Link>
          </Box>
          <Box sx={{ textAlign: "left" }}>
            <Link
              href="/shop/bag"
              color="var(--text-primary)"
              underline="hover"
            >
              Bag
            </Link>
          </Box>
          <Box sx={{ textAlign: "left" }}>
            <Link
              href="/shop/shoes"
              color="var(--text-primary)"
              underline="hover"
            >
              Shoes
            </Link>
          </Box>
          <Box sx={{ textAlign: "left" }}>
            <Link
              href="/shop/dress"
              color="var(--text-primary)"
              underline="hover"
            >
              Dress
            </Link>
          </Box>
        </Grid2>

        {/* Follow Us Section */}
        <Grid2 xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "var(--text-secondary)", textAlign: "left" }}
          >
            Follow Us
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "left" },
              gap: 2,
            }}
          >
            <Link href="#" color="inherit">
              <FacebookIcon />
            </Link>
            <Link href="#" color="inherit">
              <TwitterIcon />
            </Link>
            <Link href="#" color="inherit">
              <InstagramIcon />
            </Link>
            <Link href="#" color="inherit">
              <LinkedInIcon />
            </Link>
          </Box>
        </Grid2>
      </Grid2>

      <Typography
        variant="body2"
        sx={{ mt: 4, textAlign: "center", color: "var(--shade)" }}
      >
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
