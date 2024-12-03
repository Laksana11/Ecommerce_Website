import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Grid2,
  InputAdornment,
  MenuItem,
  TextField,
  Select,
  FormControl,
  InputLabel,
  Typography,
  Menu,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import ProductCard from "./ProductCard";
import Iphone16 from "../../assets/Iphone 16.jpg";
import GalaxyBuds from "../../assets/Samsung Galaxy Buds Live.jpg";
import Xbox from "../../assets/Xbox Stero Headset.jpg";
import Heels from "../../assets/Heels.jpg";
import Dell from "../../assets/Dell.jpg";
import Handbag1 from "../../assets/Fashionable Design.jpg";
import Handbag2 from "../../assets/Leather Handbag.jpg";
import Shoes1 from "../../assets/Shoes1.jpg";
import Handbag3 from "../../assets/Luxury Handbag.jpg";
import Lenova from "../../assets/Lenova Laptop.jpg";

const ProductList = () => {
  const { register, watch, setValue } = useForm();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [subAnchorEl, setSubAnchorEl] = useState(null);
  const [hoveredMainCategory, setHoveredMainCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = {
    Electronics: ["Laptop", "Mobile", "Headset"],
    Fashion: ["Handbag", "Shoes"],
  };

  const products = [
    {
      id: 1,
      name: "Iphone 16",
      price: 2500.0,
      rating: 4.5,
      description: "This is a great product.",
      image: Iphone16,
      category: "Mobile",
    },
    {
      id: 2,
      name: "Samsung Buds 2",
      description: "This is a great product.",
      rating: 3.5,
      price: 4000.0,
      image: GalaxyBuds,
      category: "Headset",
    },
    {
      id: 3,
      name: "Xbox Headset",
      description: "This is a great product.",
      rating: 2.5,
      price: 3000.0,
      image: Xbox,
      category: "Headset",
    },
    {
      id: 4,
      name: "Lenova",
      description: "This is a great product.",
      rating: 4.5,
      price: 5000.0,
      image: Lenova,
      category: "Laptop",
    },
    {
      id: 5,
      name: "Heels",
      description: "This is a great product.",
      rating: 4.0,
      price: 4000.0,
      image: Heels,
      category: "Shoes",
    },
    {
      id: 6,
      name: "Handbag2",
      price: 3500.0,
      image: Handbag2,
      description: "This is a great product.",
      rating: 4.5,
      category: "Handbag",
    },
    {
      id: 7,
      name: "Handbag3",
      price: 8000.0,
      description: "This is a great product.",
      rating: 3.0,
      image: Handbag3,
      category: "Handbag",
    },
    {
      id: 8,
      name: "Shoes1",
      price: 6500.0,
      description: "This is a great product.",
      rating: 4.5,
      image: Shoes1,
      category: "Shoes",
    },
    {
      id: 9,
      name: "Handbag1",
      price: 4670.0,
      description: "This is a great product.",
      rating: 4.5,
      image: Handbag1,
      category: "Handbag",
    },
    {
      id: 10,
      name: "Dell",
      description: "This is a great product.",
      rating: 3.5,
      price: 6450.0,
      image: Dell,
      category: "Laptop",
    },
  ];

  const searchTerm = watch("search") || "";

  useEffect(() => {
    let filtered = products;

    if (searchTerm.trim() !== "") {
      if (!isNaN(searchTerm)) {
        const priceFilter = parseFloat(searchTerm);
        filtered = filtered.filter((product) => product.price <= priceFilter);
      } else {
        const nameFilter = searchTerm.toLowerCase();
        filtered = filtered.filter((product) =>
          product.name.toLowerCase().includes(nameFilter)
        );
      }
    }

    if (selectedCategory && selectedCategory !== "All Categories") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedSubCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedSubCategory
      );
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, selectedSubCategory]);

  const handleMainCategoryHover = (event, mainCategory) => {
    setAnchorEl(event.currentTarget);
    setHoveredMainCategory(mainCategory);
  };

  const handleSubCategorySelect = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setValue("category", subCategory);
    setAnchorEl(null);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === "All Categories") {
      setSelectedSubCategory("");
    }
    setValue("category", category);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSubAnchorEl(null);
    setHoveredMainCategory("");
  };

  return (
    <Box sx={{ p: 2 }}>
      <Grid2
        container
        spacing={2}
        sx={{ justifyContent: "center", alignItems: "center", mb: 2 }}
      >
        <Grid2 item xs={6} sm={6} sx={{ width: "300px" }}>
          <TextField
            sx={{
              border: "1px solid var(--card-text)",
              "& .MuiInputBase-input": {
                color: "var(--card-text)",
              },
              "& .MuiInputBase-input::placeholder": {
                color: "var(--accent)",
                opacity: 1,
              },
            }}
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
        </Grid2>

        <Grid2 item xs={6} sm={6}>
          <FormControl
            fullWidth
            sx={{
              width: "300px",
            }}
          >
            <InputLabel htmlFor="category-select">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FilterAltIcon
                  fontSize="small"
                  sx={{ mr: 1, color: "var(--card-text)" }}
                />
                Category
              </Box>
            </InputLabel>
            <Select
              id="category-select"
              {...register("category")}
              label="Category"
              value={
                selectedSubCategory || selectedCategory || "All Categories"
              }
              sx={{
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "var(--accent)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "var(--card-text)",
                },
              }}
              onChange={(e) => handleCategorySelect(e.target.value)}
            >
              <MenuItem value="All Categories">All Categories</MenuItem>
              {Object.keys(categories).map((mainCategory) => (
                <MenuItem
                  key={mainCategory}
                  value={mainCategory}
                  onMouseEnter={(e) => handleMainCategoryHover(e, mainCategory)}
                >
                  {mainCategory}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid2>
      </Grid2>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onMouseLeave={handleClose}
      >
        {categories[hoveredMainCategory]?.map((subCategory) => (
          <MenuItem
            key={subCategory}
            onClick={() => handleSubCategorySelect(subCategory)}
          >
            {subCategory}
          </MenuItem>
        ))}
      </Menu>

      <Grid2 container spacing={2} justifyContent="center" alignItems="center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Grid2 item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard product={product} isCart={false} />
            </Grid2>
          ))
        ) : (
          <Grid2 item xs={12}>
            <Typography sx={{ mt: 2, textAlign: "center" }}>
              No products found
            </Typography>
          </Grid2>
        )}
      </Grid2>
    </Box>
  );
};

export default ProductList;
