import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/Slices/productSlice";
import ProductCard from "./ProductCard";
import { useEffect } from "react";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    // Hardcoded product list
    const productData = [
      {
        id: 1,
        name: "Product A",
        price: 50,
        description: "Description of Product A",
        image: "/path-to-image",
      },
      {
        id: 2,
        name: "Product B",
        price: 30,
        description: "Description of Product B",
        image: "/path-to-image",
      },
      // Add more products
    ];
    dispatch(setProducts(productData));
  }, [dispatch]);

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
