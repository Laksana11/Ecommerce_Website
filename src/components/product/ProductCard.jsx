import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";

const ProductCard = ({ product, isCart }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handelDeleteCard = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <Card
      sx={{
        width: 250,
        margin: "16px",
        textAlign: "center",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover", // Ensures images cover the area uniformly
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        {!isCart ? (
          <IconButton
            color="primary"
            onClick={handleAddToCart}
            title="Add to Cart"
          >
            <ShoppingCartIcon />
          </IconButton>
        ) : (
          <IconButton
            color="primary"
            onClick={handelDeleteCard}
            title="Delete Cart"
          >
            <DeleteIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
