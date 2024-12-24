import React from 'react'
import CategoryCard from '../../category/CategoryCard.jsx'
import SubTitle from '../../utility/subTitle/SubTitle'
import  img  from  '../../../img/item.png'
import  img2  from  '../../../img/clothe.png'
import { Row } from 'react-bootstrap'
const HomeCategories = () => {
  return (
    <>
        <SubTitle title='التصنيفات'  btnTitle='المزيد' />
        <Row className='d-flex justify-content-center mt-3 gap-2 '>
             <CategoryCard titleCard='المنتجات'  img={img}/>
             <CategoryCard titleCard='المنتجات'  img={img2}/>
             <CategoryCard titleCard='المنتجات'  img={img}/>
             <CategoryCard titleCard='المنتجات'  img={img2}/>
             <CategoryCard titleCard='المنتجات'  img={img}/>
             <CategoryCard titleCard='المنتجات'  img={img2}/>
             <CategoryCard titleCard='المنتجات'  img={img}/>
             <CategoryCard titleCard='المنتجات'  img={img2}/>
        </Row>
    </>
  )
}

export default HomeCategories