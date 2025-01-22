import SubTitle from '../../utility/subTitle/SubTitle';
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import baseUrl from '../../../api/baseUrl';
import Slider from 'react-slick';
import ProductCard from '../../product/ProductCard.jsx';
import { Col, Row } from 'react-bootstrap';

const CardProductContainer = ({ title, btnTitle, path }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProducts = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseUrl}/products`);
      if (res) setData(res.data);
    } catch (e) {
      setError(e);
      console.error('Error fetching products:', e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const settings = {
    className: "center",
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 5,
    dots: false,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    // swipeToSlide: true
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div>
      <SubTitle title={title} btnTitle={btnTitle} path={path} />
      {loading && <div className="alert alert-info">Loading products...</div>}
      {error && <div className="alert alert-danger">Error fetching products: {error.message}</div>}
      <div >
        <Slider {...settings} >
       
          {data.map((product,i) => (
        <div style={{marginRight:'10px'}}>
            <ProductCard key={i} data={product}/>
            </div>
               
          ))}
       
        </Slider>
      </div>
    </div>
  );
};

export default CardProductContainer;
