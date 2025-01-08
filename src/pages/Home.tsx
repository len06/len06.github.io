import React from "react";
import Carousel from "../components/Carousel/Carousel";
import PInformation from "../components/PInformation/PInformation";
import {images} from "../components/Carousel/Data";

function Home() {
  return( 
    <div>
        <Carousel images={images}/>
        <PInformation />
    </div>
  )
}

export default Home;
