import React from "react";
import Carousel from "../components/Carousel/Carousel.tsx";
import PInformation from "../components/PInformation/PInformation.tsx";
import {images} from "../components/Carousel/Data.tsx";

function Home() {
  return( 
    <div>
        <Carousel images={images}/>
        <PInformation />
    </div>
  )
}

export default Home;
