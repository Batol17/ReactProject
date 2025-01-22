import React from 'react';
import { Card } from 'react-bootstrap';
import { FaHeart, FaCartPlus } from "react-icons/fa";
import rate from '../../img/rate.png';
import './ProductCard.css';

const ProductCard = ({ data }) => {
  return (
    <Card className='card-pro  me-1' style={{ height: '400px' }}>
      <Card.Img 
        variant='top' 
        src={data.image} 
        className='img-pro'
      />
      <div className='px-2'>
        <div className='icon-container'>
          <i className='icon-card-heart'><FaHeart /></i>
          <i className='icon-card-cart'><FaCartPlus /></i>
        </div>
        <Card.Text>{data?.title}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <p className='price'>${data.price}</p>
          <img
            src={rate}
            alt="Rating"
            height="16px"
            width="16px"
          />
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
