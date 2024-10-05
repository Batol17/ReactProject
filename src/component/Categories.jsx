import React, { useContext, useEffect, useState, useMemo } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import useFetch from './hooks/useFetch';
import storeContext from './hooks/storeContext';

function Categories() {
  const { products, setProducts } = useContext(storeContext);
  const { data, loading, error } = useFetch('products/categories');
  
  const [allProducts, setAllProducts] = useState([]);
  const AllCat = useMemo(() => ['All', ...(data || [])], [data]);

  useEffect(() => {
    if (products) {
      setAllProducts(products); 
      console.log(products);
    }
  }, [AllCat]);


  const filterByCat = (cat) => {
    const filteredProducts = cat === 'All' ? allProducts : allProducts.filter(item => item.category === cat);
    setProducts(filteredProducts);
    console.log(filteredProducts);
  };

  if (loading) {
    return <Spinner animation="border" variant="primary" className='m-auto d-flex mt-5' />;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  return (
    <Container>
      <Row className='py-5'>
        <Col className='d-flex my-2 flex-wrap justify-content-center'>
          {AllCat.map((item, index) => (
            <button 
              key={index} 
              onClick={() => filterByCat(item)} 
              className='p-2 m-1 btn-search' 
              style={{ width: '100px' }}
            >
              {item}
            </button>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Categories;
