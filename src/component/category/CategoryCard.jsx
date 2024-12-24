import React from 'react'
import  './CategoryCard.css'
import { Col } from 'react-bootstrap'
const CategoryCard = ({titleCard,img}) => {
  return (
    <Col 
      xs="4"
      sm="4"
      md="3"
      lg="2"
      className='d-flex justify-content-center  shadow cat-card ' style={{height:'8rem'}} >
        <div className="img-content mt-2 " 
        >
          <img src={img} alt="" className=' img '  />
          <div className=" mt-3 text-card">{titleCard}</div>

        </div>
    </Col>
  )
}

export default CategoryCard