
import SubTitle from '../../utility/subTitle/SubTitle'
import  img  from  '../../../img/item.png'
import  img2  from  '../../../img/clothe.png'
import { Row } from 'react-bootstrap'
import ProductCard from '../../product/ProductCard.jsx'
const CardProductContainer = ({title,btnTitle}) => {
  return (
    <div>
        <SubTitle title={title} btnTitle={btnTitle} />
        <Row className='d-flex justify-content-between mt-3 gy-3'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
         </Row>
    </div>
  )
}

export default CardProductContainer