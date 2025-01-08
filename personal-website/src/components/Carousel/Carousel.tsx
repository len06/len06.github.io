import {useState, useEffect} from 'react';
import './Carousel.css';

interface Image{
    image:string,
    title:string
}

interface CarouselProp {
    images: Image[],
}

function Carousel(props:CarouselProp){
    const [currentIndex,setCurrentIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
        slideRight()}, 5000
    )
    });

    const slideRight = () => {
        if(currentIndex === props.images.length - 1){
            setCurrentIndex(0);
        }
        else{
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    }
    return(
        <div className="carousel-container" >
            <div className="carousel-wrapper">
            {props.images.map((img,index) => {
                return(
                    <div key={index} className={index === currentIndex ? "carousel-card carousel-card-active" : "carousel-card"}>
                        <img src={img.image} alt={img.title} className="card-image"></img>
                        <div className="card-overlay">
                            <h2 className="card-text">Welcome to my webpage</h2>
                        </div>
                    </div>
                )
            })
            }
            </div>
        </div>
    )
}


export default Carousel;