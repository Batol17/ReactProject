import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import baseUrl from '../../api/baseUrl'
import ProductCard from '../../component/product/ProductCard'
import { Col, Container, Row } from 'react-bootstrap'

const AllProduct = () => {
  useEffect(()=>{
    getAllproduct()
  },[])

  const [data,setData]=useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const getAllproduct = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseUrl}/products`);
      // console.log(res.data);
      
      if (res) setData(res.data);
    } catch (e) {
      setError(e);
      console.error('Error fetching products:', e);
    } finally {
      setLoading(false);
    }
  }, []);
  return (
   <Container>
      {loading && <div className="alert alert-info">Loading products...</div>}
      {error && <div className="alert alert-danger">Error fetching products: {error.message}</div>}
      <Row className='d-flex justify-content-between col-pro'>      
        {data?.map((product,i)=>(
        <Col xs={12} sm={6} md={3} key={i} className='my-1'>
          <ProductCard  data={product} />
        </Col>
        ))}
      </Row>
      </Container>
  )
}

export default AllProduct