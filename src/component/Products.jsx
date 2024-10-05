import { Container, Row, Spinner } from 'react-bootstrap';
import Product from './Product';
import useFetch from './hooks/useFetch';
import { useContext, useEffect } from 'react';
import storeContext from './hooks/storeContext';

function Products() {
  const { products, setProducts } = useContext(storeContext);
  const { data, loading, error } = useFetch('products');

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data, setProducts]);

  if (loading) {
    return <Spinner animation="border" variant="primary" className='m-auto d-flex mt-5' />;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  return (
    <Container>
      <Row className='m-3 g-3'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
}

export default Products;
