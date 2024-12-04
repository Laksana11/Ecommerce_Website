import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateQuantity,
  removeFromCart,
  clearCart,
} from "../../redux/slices/cartSlice";
import {
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  Divider,
} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemoveAll = () => {
    dispatch(clearCart());
  };
  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "auto",
        padding: 2,
        mt: 4,
        borderRadius: 2,
        boxShadow: 3,
        bgcolor: "var(--card-bgcolor)",
      }}
    >
      <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
        Shopping Cart
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <Typography
          variant="body2"
          color="error"
          sx={{
            cursor: "pointer",
            textDecoration: "underline",
            fontSize: "0.875rem",
          }}
          onClick={handleRemoveAll}
        >
          Remove All
        </Typography>
      </Box>
      {cart.map((item) => (
        <Box
          key={item.id}
          sx={{
            mb: 2,
            backgroundColor: "var(--body)",
            borderRadius: 2,
            padding: 2,
            boxShadow: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              <Box>
                <Typography variant="h6">{item.name}</Typography>

                <Typography
                  variant="body2"
                  color="error"
                  sx={{
                    cursor: "pointer",
                    mt: 0.5,
                    textDecoration: "underline",
                  }}
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Typography variant="h6" sx={{ textAlign: "right" }}>
                ${item.price.toFixed(2)}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 1,
                  gap: 1,
                }}
              >
                <IconButton
                  size="small"
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: Math.max(item.quantity - 1, 1),
                      })
                    )
                  }
                >
                  <RemoveCircleOutlineIcon fontSize="small" />
                </IconButton>
                <TextField
                  size="small"
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: Math.max(Number(e.target.value), 1),
                      })
                    )
                  }
                  slotProps={{
                    style: { textAlign: "center", width: "40px" },
                  }}
                  sx={{ "& .MuiInputBase-root": { padding: 0 } }}
                />
                <IconButton
                  size="small"
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: item.quantity + 1,
                      })
                    )
                  }
                >
                  <AddCircleOutlineIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Divider />
        </Box>
      ))}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Typography variant="h6">Sub-Total</Typography>
        <Typography variant="h6" fontWeight="bold">
          ${total.toFixed(2)}
        </Typography>
      </Box>
      <Button
        variant="outlined"
        fullWidth
        sx={{
          mt: 2,
          background: "var(--background)",
          borderColor: "var(--background)",
          color: "var(--text-primary)",
          "&:hover": {
            background: "var(--body)",
            borderColor: "var(--body)",
            color: "var(--text-secondary)",
          },
        }}
      >
        Checkout
      </Button>
    </Box>
  );
};

export default Cart;
