import React from 'react'
import './imageSlider.css'
import Slider from 'react-slick';
import { useState } from 'react';
import slide1 from '../../images/image1.jpg';
import slide2 from '../../images/image2.jpg';
import slide3 from '../../images/image3.jpg';
import slide4 from '../../images/image4.jpg';
import slide5 from '../../images/imgDrone.jpg';



import { FaRegArrowAltCircleLeft,FaRegArrowAltCircleRight } from "react-icons/fa";

const images = [slide1, slide2, slide3, slide4, slide5]

function ImageSlider() {
     const NextArrow = ({onClick}) =>{
         return(
             <div className="arrow next" onClick={onClick}>
                 <FaRegArrowAltCircleRight />
             </div>
         )
     };

     const PrevArrow = ({onClick}) =>{
         return(
             <div className="arrow prev" onClick={onClick}>
                 <FaRegArrowAltCircleLeft />
             </div>
         )
     };

     const [imageIndex, setImageIndex] = useState(0);
    const settings = {
        infinite: true,
        lazyLoad: true,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2200,
        dots: true,
        cssEase: "linear",
        pauseOnHower: "true",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next)=> setImageIndex(next),
        responsive: [
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    
    }
  return (
    <div className='Slidercontainer'>
        <h1>Our Events</h1>
        <Slider {...settings}>
            {images.map((img, idx) => (
                <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                    <img src={img} alt={img} objectFit='cover'/>
                </div>
            ))}
        </Slider>
    </div>
  
  )
}

export default ImageSlider