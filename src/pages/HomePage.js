import { Box } from "@mui/material";
import ProductList from "../components/product/ProductList";
import ImageSlider from "../components/ImageSlider";

const HomePage = () => {
  return (
    <Box style={{ backgroundColor: "var(--body)", height: "auto" }}>
      <ImageSlider />
      <ProductList />
    </Box>
  );
};
export default HomePage;
