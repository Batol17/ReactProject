import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import  {  FaHeart ,FaCartPlus} from "react-icons/fa"
import  img from '../../img/labtop.png'
import rate from '../../img/rate.png'
import './ProductCard.css'
const ProductCard = () => {
  return (
    <Col  xs="6" sm="6" md="4" lg="3" className="d-flex card-pro">
      <Card  >
        <Card.Img variant='top' 
         src={img}
         className='img-pro'
         />       
          <div className='px-2'>
              <i className='icon-card-heart  fs-3 pt-1 d-flex justify-content-end align-item-center'><FaHeart/></i>
              <i className='icon-card-cart  fs-3 pt-1 d-flex justify-content-end align-item-center'><FaCartPlus/></i>
              <Card.Text>ساعة يد زكية</Card.Text>
              <div className="d-flex justify-content-between">
                  <p className=''>880$</p>
                  <img
                      className=""
                      src={rate}
                      alt=""
                      height="16px"
                      width="16px"
                  />
               </div>

          </div>
      </Card>
    </Col>
  )
}

export default ProductCard