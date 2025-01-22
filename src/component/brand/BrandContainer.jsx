import React from 'react'
import { Row } from 'react-bootstrap'
import BrandCard from './BrandCard'
import img1 from '../../img/brand1.png'
import img2 from '../../img/brand2.png'
import img3 from '../../img/brand3.png'
import img4 from '../../img/brand1.png'
const BrandContainer = () => {
  return (
    <div>
          <Row className='d-flex justify-content-center gap-1'>
            <BrandCard image={img1}/>
            <BrandCard image={img2}/>
            <BrandCard image={img3}/>
            <BrandCard image={img2}/>
            <BrandCard image={img1}/>
            <BrandCard image={img4}/>
         </Row>
    </div>
  )
}

export default BrandContainer