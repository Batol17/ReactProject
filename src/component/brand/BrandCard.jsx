import React from 'react'
import { Card } from 'react-bootstrap'

const BrandCard = ({image}) => {
  return (
    
         <Card
           xs="6" sm="6" md="4" lg="3"
         style={{ width: '11rem' }}
         className='border-0 shadow'
         >
            <Card.Img variant="top" src={image}  />
         </Card>

  )
}

export default BrandCard