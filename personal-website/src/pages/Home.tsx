import React from "react";
import Carousel from "../components/Carousel/Carousel.tsx";
import img1 from "../assets/Carousel_images/Free-Sky-with-Clouds-Background-Pixel-Art3.jpg";
import img2 from "../assets/Carousel_images/Free-Sky-with-Clouds-Background-Pixel-Art9.jpg";
import img3 from "../assets/Carousel_images/original-9b9e53988ad163655abe7ec7793bdaf2.png";

function Home() {
  const images = [img1,img2,img3];
  return <Carousel images={images}/>;
}

export default Home;
