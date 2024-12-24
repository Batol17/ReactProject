import React from 'react'
import './Carousel.css'
import {Carousel } from 'react-bootstrap';
import img1 from '../../../img/1.png';
import img2 from '../../../img/2.png';
import img3 from '../../../img/prod3.png';
import img4 from '../../../img/prod4.png';
function Carusel() {
  return (
    <Carousel className='w-100'>
       {/* <Carousel.Item className="img-slider" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "296px", width: "313.53px" }}
                        className=""
                        src={img3}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title">هناك خصم كبير</h3>
                        <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                    </div>
                </div>
            </Carousel.Item> */}
      <Carousel.Item className='img-slider w-100 '>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <img src={img1} alt="" 
               style={{ height: "296px", width: "313.53px" }}
            />
          <div>
                        <h3 className="slider-title">هناك خصم كبير</h3>
                        <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                   </div>
         </div>
      </Carousel.Item>
      <Carousel.Item className='img-slider'>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <img src={img2} alt=""  
          style={{ height: "296px", width: "313.53px" }}
        />
        <div>
                       <h3 className="slider-title">هناك خصم كبير</h3>
                        <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                    </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='img-slider'>
      <div className="d-flex flex-row justify-content-center align-items-center">
      <img src={img3} alt="" 
         style={{ height: "296px", width: "313.53px" }}
      />
        
        <div>
        <h3 className="slider-title">هناك خصم كبير</h3>
        <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                   
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='img-slider'>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <img src={img4} alt=""  
          style={{ height: "296px", width: "313.53px" }}
        />
        <div>
                       <h3 className="slider-title">هناك خصم كبير</h3>
                        <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                    </div>
        </div>
      </Carousel.Item>
    </Carousel>
      
    
  )
}

export default Carusel