import React, { useState, useEffect } from "react";
import { Slide, Box, IconButton } from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import Banner1 from "../assets/banner1.jpg";
import Ban1 from "../assets/ban1.jpg";
import Ban2 from "../assets/ban2.jpg";

const ImageSlider = () => {
  const images = [Banner1, Ban1, Ban2];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "2000px",
        margin: "auto",
      }}
    >
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <Box
          component="img"
          src={images[currentIndex]}
          alt="Slider Image"
          sx={{
            width: "auto",
            height: "500px",
            borderRadius: "8px",
          }}
        />
      </Slide>

      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          zIndex: 10,
          transform: "translateY(-50%)",
        }}
      >
        <ArrowBack sx={{ color: "black" }} />
      </IconButton>
      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          zIndex: 10,
          transform: "translateY(-50%)",
        }}
      >
        <ArrowForward sx={{ color: "black" }} />
      </IconButton>
    </Box>
  );
};

export default ImageSlider;
