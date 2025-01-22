import React from 'react'
import  './CategoryCard.css'
import { Col } from 'react-bootstrap'
const CategoryCard = ({titleCard,img}) => {
  return (
     <div className="d-flex  mt-2 " 
        >
        
          <div className=" mt-3 text-card">{titleCard}</div>
        </div>
  
  )
}

export default CategoryCard