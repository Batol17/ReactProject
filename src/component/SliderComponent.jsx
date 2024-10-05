import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
function SliderComponent() {
  return (
   
       <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 slide-img"
          src={img1}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide-img"
          src={img2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slide-img"
          src={img3}
          alt="Third slide"
        />
      
      </Carousel.Item>
    </Carousel>
    
  )
}

export default SliderComponent