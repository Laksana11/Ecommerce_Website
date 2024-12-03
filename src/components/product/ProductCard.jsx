import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
} from "@mui/material";

const ProductCard = ({ product, isCart }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setValue, watch } = useForm({
    defaultValues: {
      count: 0,
    },
  });
  const user = useSelector((state) => state.auth.user);
  const count = watch("count");

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setValue("count", count + 1);
  };

  const handleBuyNow = () => {
    dispatch(addToCart(product));
    navigate("/cart");
  };
  return (
    <Card
      sx={{
        width: 250,
        height: "100%",
        margin: "16px",
        textAlign: "center",
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: "var(--card-background)",
        color: "var(--card-text)",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: 200,
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        />

        {!isCart && user && (
          <IconButton
            sx={{
              position: "absolute",
              bottom: 10,
              right: 10,
              backgroundColor: "var(--shade)",
              color: "var(--background)",
              "&:hover": {
                backgroundColor: "var(--background)",
                color: "var(--shade)",
              },
              fontSize: "30px",
            }}
            onClick={handleAddToCart}
            title="Add to Cart"
          >
            <ShoppingCartIcon sx={{ fontSize: "inherit" }} />
            {count > 0 && (
              <span style={{ marginLeft: "4px", fontSize: "15px" }}>
                ({count})
              </span>
            )}
          </IconButton>
        )}

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "var(--background-secondary)",
            color: "var(--text-primary)",
            padding: "4px 8px",
            borderRadius: "4px",
            fontWeight: "bold",
          }}
        >
          LKR {product.price}
        </Box>
      </Box>

      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" gutterBottom>
          {product.name}
        </Typography>

        <Rating
          name={`product-rating-${product.id}`}
          value={product.rating || 0}
          precision={0.5}
          readOnly
          size="small"
          sx={{ mb: 1 }}
        />

        <Typography variant="body2" sx={{ mb: 2 }}>
          {product.description}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between", pt: 1 }}>
        <button
          style={{
            backgroundColor: "var(--background)",
            color: "var(--text-primary)",
            padding: "8px 12px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
            width: "100%",
          }}
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
