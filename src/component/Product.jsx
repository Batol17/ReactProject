import React from 'react';
import {  Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiShow } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { addToCart } from "../redux/cartReducer.js";

function Product({ product,num }) {

  const dispatch =useDispatch()

  return (
    <Col sm='6' lg='3' md='4' className='p-1' style={{ height: '430px' }}>
      <Card className="card m-1" style={{ height: '100%' }}>
        <Card.Img src={product.image} alt={product.title} style={{ height: '43%' }} />
        <Card.Body width='50%'>
          <Card.Title className='text-info' style={{ fontSize: '14px' }}>{product.title}</Card.Title>
          <Card.Text className="text-center w-100 mt-2" style={{ height: '40%' }}>
            <p style={{ lineHeight: '10px' }}>Type : {product.category}</p>
            <p style={{ lineHeight: '10px' }}>Price : {product.price}</p>
            <p style={{ lineHeight: '10px' }}>Count : {product.rating?.count}</p>
          </Card.Text>
          <Link to={`/products/${product.id}`} className='d-flex justify-content-end eye'>
            <BiShow />  
          </Link>
          <Button className='cart' onClick={() => dispatch(addToCart({
            id:product.id,
            title:product.title,
            price:product.price,
            category:product.category,
            rating :{
              count:product.rating.count
            },
            image:product.image
         }))}>Add To Cart</Button>
        <h1>{num}</h1>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Product;
