import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Button,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { clearCart } from "../redux/slices/cartSlice";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const [theme, setTheme] = React.useState(
    document.documentElement.getAttribute("data-theme") || "light"
  );

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = theme === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    handleMenuClose();
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "var(--background)",
        color: "white",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo or App Name */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            sx={{
              color: "var(--text-primary)",
            }}
          >
            E-Commerce App
          </Typography>
        </Link>
        {/* Authentication and Cart Section */}
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton onClick={toggleTheme} color="inherit">
            {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          {user ? (
            <>
              <IconButton onClick={handleMenuOpen} color="inherit">
                <AccountCircle />
              </IconButton>
              <Typography variant="body1">{user.name}</Typography>

              <Menu
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button component={Link} to="/login" color="inherit">
                Login
              </Button>
              <Button component={Link} to="/signup" color="inherit">
                Register
              </Button>
            </>
          )}

          {user && (
            <Link to="/cart">
              <IconButton color="inherit">
                <Badge
                  badgeContent={cart.length}
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "var(--background-secondary)", // Badge background color
                      color: "white", // Badge text color
                    },
                  }}
                >
                  <ShoppingCartIcon sx={{ color: "var(--text-primary)" }} />
                </Badge>
              </IconButton>
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
