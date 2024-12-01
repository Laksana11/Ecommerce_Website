import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Iphone16 from "../../assets/Iphone 16.jpg";
import {
  Box,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Tooltip,
  useMediaQuery,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import GalaxyBuds from "../../assets/Samsung Galaxy Buds Live.jpg";
import Xbox from "../../assets/Xbox Stero Headset.jpg";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { register, watch } = useForm();
  const [filteredProducts, setFilteredProducts] = useState([]);

  const products = [
    {
      id: 1,
      name: "Iphone 16",
      price: 25.0,
      description: "This is the description for Product 1.",
      image: Iphone16,
      category: "Mobile",
    },
    {
      id: 2,
      name: "Samsung buds 2",
      price: 40.0,
      description: "This is the description for Product 2.",
      image: GalaxyBuds,
      category: "Headset",
    },
    {
      id: 3,
      name: "XBox Headset",
      price: 30.0,
      description: "This is the description for Product 3.",
      image: Xbox,
      category: "Headset",
    },
    {
      id: 4,
      name: "XBox Headset 2",
      price: 50.0,
      description: "This is the description for Product 3.",
      image: Xbox,
      category: "Laptop",
    },
  ];

  const searchTerm = watch("search") || ""; // Get the search input value
  const selectedCategory = watch("category") || ""; // Get the selected category

  // Extract unique categories from the product list
  const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));

  useEffect(() => {
    let filtered = products;

    if (searchTerm.trim() !== "") {
      if (!isNaN(searchTerm)) {
        // Filter by price
        const priceFilter = parseFloat(searchTerm);
        filtered = filtered.filter((product) => product.price <= priceFilter);
      } else {
        // Filter by name
        const nameFilter = searchTerm.toLowerCase();
        filtered = filtered.filter((product) =>
          product.name.toLowerCase().includes(nameFilter)
        );
      }
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory]); // Fixed dependencies array

  return (
    <div>
      <Grid
        item
        container
        xs={12}
        md={7}
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {/* Search Input */}
        <Grid item xs={12} sm={6}>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            type="text"
            placeholder="Search by name or price"
            {...register("search")}
            fullWidth
            variant="outlined"
          />
        </Grid>

        {/* Category Dropdown */}
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel htmlFor="category-select">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FilterAltIcon
                  fontSize="small"
                  style={{ marginRight: "8px" }}
                />
                Category
              </Box>
            </InputLabel>
            <Select
              id="category-select"
              {...register("category")}
              label="Category"
            >
              <MenuItem value="">All Categories</MenuItem>
              {uniqueCategories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Product List */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} isCart={false} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
