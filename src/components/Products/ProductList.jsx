import React from "react";
import Iphone16 from "../../Assets/Iphone 16.jpg";
import GalaxyBuds from "../../Assets/Samsung Galaxy Buds Live.jpg";
import Xbox from "../../Assets/Xbox Stero Headset.jpg";
import ProductCard from "./ProductCard"; // Adjust the path to where your ProductCard is located

const ProductList = () => {
  // Hardcoded product list array
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$25.00",
      description: "This is the description for Product 1.",
      image: Iphone16,
    },
    {
      id: 2,
      name: "Product 2",
      price: "$40.00",
      description: "This is the description for Product 2.",
      image: GalaxyBuds,
    },
    {
      id: 3,
      name: "Product 3",
      price: "$30.00",
      description: "This is the description for Product 3.",
      image: Xbox,
    },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
