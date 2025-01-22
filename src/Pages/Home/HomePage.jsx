import React from 'react'
import Carousel from '../../component/Home/carousel/Carousel.jsx'
import HomeCategories from '../../component/Home/homeCategories/HomeCategories.jsx'
import { Container, Row } from 'react-bootstrap'
import CardProductContainer from '../../component/Home/cardProductContainer/CardProductContainer.jsx'
import DiscountSection from '../../component/Home/discountSection/DiscountSection.jsx'
import BrandFeatures from '../../component/brand/BrandFeatures.jsx'
import AllProduct from '../product/AllProduct.jsx'
const HomePage = () => {
  return (
    <div>
        <div className="font" style={{minHeight:'670px'}}>
        
        <Carousel/>
       <Container>
         <CardProductContainer title='الاكثر مبيعا' btnTitle='المزيد' path='allProduct' />
         <HomeCategories  />

         <AllProduct/>
         <DiscountSection/>
         {/* <CardProductContainer  title='احدث الازياء' btnTitle='المزيد' path='allProduct'/> */}
         <BrandFeatures   title='اشهر الماركات ' btnTitle='المزيد' path='allBrand'   />
       </Container>
        </div>
    </div>
  )
}

export default HomePage