import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeFromCart } from "../../redux/slices/cartSlice";
import { Box, Grid, Typography, IconButton, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

const CartSummary = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleIncreaseQuantity = (id) => {
    const product = cart.find((item) => item.id === id);
    dispatch(updateQuantity({ id, quantity: product.quantity + 1 }));
  };

  const handleDecreaseQuantity = (id) => {
    const product = cart.find((item) => item.id === id);
    if (product.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: product.quantity - 1 }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Box p={2}>
      <Typography variant="h5" gutterBottom>
        Cart Summary
      </Typography>
      {cart.length > 0 ? (
        <>
          <Grid container spacing={2}>
            {cart.map((item) => (
              <React.Fragment key={item.id}>
                <Grid item xs={2} textAlign="center">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </Grid>

                <Grid item xs={4}>
                  <Typography variant="body1" fontWeight="bold">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Grid>

                <Grid item xs={3} textAlign="center">
                  <IconButton
                    size="small"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Typography
                    variant="body1"
                    component="span"
                    style={{ margin: "0 8px" }}
                  >
                    {item.quantity}
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    <AddIcon />
                  </IconButton>
                </Grid>

                <Grid item xs={3} textAlign="center">
                  <Typography variant="body1" fontWeight="bold">
                    ${item.price * item.quantity}
                  </Typography>
                  <IconButton
                    color="error"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>

          <Box mt={4} textAlign="right">
            <Typography variant="h6">
              Total: ${totalPrice.toFixed(2)}
            </Typography>
          </Box>
        </>
      ) : (
        <Typography variant="body1" color="text.secondary">
          Your cart is empty.
        </Typography>
      )}
    </Box>
  );
};

export default CartSummary;
