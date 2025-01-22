import React, { useEffect, useState } from 'react';
import CategoryCard from '../../category/CategoryCard.jsx';
import SubTitle from '../../utility/subTitle/SubTitle';
import img from '../../../img/item.png';
import { Row } from 'react-bootstrap';
import Cookies from 'universal-cookie';
import axios from 'axios';
import './HomeCategories.css'
import baseUrl from '../../../api/baseUrl.js';

const HomeCategories = () => {
    const [data, setData] = useState([]);
    const [dataCategory, setDataCategory] = useState([]);
    const cookies = new Cookies();

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try{
            const res = await axios.get('https://fakestoreapi.com/products/categories');
            res && setData(res.data);
            console.log('data',res.data); // يمكن استخدام هذه السطر لرؤية البيانات المسترجعة
     
        }catch(e){
            console.log(e);
            }
    };
    const filterCategories = async (dataCat) => {
        try{
            const res= await axios.get(`${baseUrl}/products/category/${dataCat}`);
            setDataCategory(res.data)
            // dataCat &&   console.log('hihihi',dataCategory);
            
        }catch(e){
            console.log(e)
        }
    }

    return (
        <>
            <SubTitle title='التصنيفات'   />
            <div className='d-flex justify-content-center my-3 gap-2'>
                {data && data.map((cat, i) => (
                    <div  key={i} className='card-content ' onClick={()=>filterCategories(cat)}>
                        <div  className="card-text" >{cat}</div>
                    </div>
                                 
                ))}
            </div>
        </>
    );
};

export default HomeCategories;
