import React from 'react'
import Carousel from '../../component/Home/carousel/Carousel.jsx'
import HomeCategories from '../../component/Home/homeCategories/HomeCategories.jsx'
import { Container, Row } from 'react-bootstrap'
import CardProductContainer from '../../component/Home/cardProductContainer/CardProductContainer.jsx'
import DiscountSection from '../../component/Home/discountSection/DiscountSection.jsx'
import BrandFeatures from '../../component/brand/BrandFeatures.jsx'
const HomePage = () => {
  return (
    <div>
        <div className="font" style={{minHeight:'670px'}}>
        
        <Carousel/>
       <Container>
         <HomeCategories  />
         <CardProductContainer title='الاكثر مبيعا' btnTitle='المزيد' />
         <DiscountSection/>
         <CardProductContainer  title='احدث التصنيفات' btnTitle='المزيد'/>
         <BrandFeatures   title='اشهر الماركات '   />
       </Container>
        </div>
    </div>
  )
}

export default HomePage