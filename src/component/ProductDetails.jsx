import React, { useState, useEffect } from 'react';
import { Col, Container, Fade, Row } from "react-bootstrap";
import Rating from './Rating/Rating'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const param = useParams();
  const [product, setProdut] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  // الحصول على تفاصيل المنتج
  const fetchProductById = async () => {
      try {
          const res = await axios.get(`https://fakestoreapi.com/products/${param.id}`);
          setProdut(res.data);
      } catch (err) {
          setError('حدث خطأ أثناء تحميل بيانات المنتج.');
      } finally {
          setLoading(false);
      }
  };

  useEffect(() => {
    fetchProductById();
  }, [param.id]);

  if (loading) {
      return <div className='my-5'>Loading...</div>;
  }

  if (error) {
      return <div>{error}</div>;
  }

    
    return (
       
       
           
      
      
      <Container>
          <Row className="justify-content-between pt-4">  
          <Col lg='6'  md='8' className='pb-3' style={{ height:'70vh'}}>
            <img
              style={{ height: "90%", width: "100%"}}
              src={`${product.image}`}
              className="d-sm-block pe-2 img-product  w-md-30 mb-3 mb-md-0"
              alt="category"
            />
            
              <Rating ratingsAverage={product?.rating.rate || 0} />
            
          </Col>       
          <Col lg='6'>
            <div className="card-body text-start p-2">
              <h1 className="card-title text-center text-info">{product?.title}</h1>
              <div className="fw-bold fs-4">
                <span className="card-title" >type : </span>
                <span className="text-secondary ps-2">{product?.category}</span>
              </div>
              <div className='fw-bold fs-4' >
                <span className="card-title ">count : </span>
                <span className="text-secondary ps-2">{product.rating.count}</span>
              </div>
              <div className="fw-bold fs-4">
                <span className="card-title"> price : </span>
                <span className="text-secondary ps-2"> {product?.price } 
                  <span className="text-success"> $ </span>
                </span>
              </div>
            </div>
            <div className="fs-6 overflow-auto">
              <p className="card-title" style={{ height: "150px" }}>{product?.description}</p>
            </div>
            <Link to="/">
                        <button
                            style={{ border: "none" }}
                            className="btn btn-primary mx-2 bg-info"
                        >
                            Home Page
                        </button>
                    </Link>

          </Col>
         
        </Row>
      </Container>
    );
};

export default ProductDetails;
