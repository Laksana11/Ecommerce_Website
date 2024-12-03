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
        backgroundColor: "var(--background-secondary)",
        color: "var(--text-primary)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="h6"
            sx={{
              color: "var(--text-primary)",
            }}
          >
            E-Commerce Website
          </Typography>
        </Link>

        <Box display="flex" alignItems="center" gap={2}>
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
              <Button component={Link} to="/login" color="var(--text-primary)">
                Login
              </Button>
              <Button component={Link} to="/signup" color="var(--text-primary)">
                Signup
              </Button>
            </>
          )}

          {user && (
            <Link to="/cart">
              <IconButton color="var(--body)">
                <Badge
                  badgeContent={cart.length}
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "var(--background-secondary)",
                      color: "var(--text-primary)",
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
