import React, { useState } from 'react'
import Cookies from 'universal-cookie'
// import img from '../../../img/login.png'
import {  Col, Container,  Form,  Row, ToastContainer } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './Login&Register.css'
import axios from 'axios'
const Login = () => {
    const [username,setUsername]=useState('')
    const [error,setError]=useState('')
    const [password,setPassword]=useState('')
    const [role,setRole]=useState('Admin')
    const navigate=useNavigate()
    const submitUserLogin= async(e)=>{
        e.preventDefault();
        console.log('submit');
        try{
            const res = await axios.post('https://fakestoreapi.com/auth/login',{password,username})
            console.log(res);
            if(res.status==200){
                const cookies=new Cookies();
                cookies.set('token',res.data.token)
                cookies.set('role',role)
                cookies.set('token',res.data.token)
                // navigate('/')
               window.location.pathname='/'

            }
            

        }

        catch(error){
            console.log(error);
            
        }
      
        }






  return (

    <Container style={{ minHeight: "670px" }}>
    <Row className="py-5 d-flex justify-content-center ">
        <Form onSubmit={submitUserLogin} sm="6"  className="login    d-flex flex-column align-item-center ">
        {/* <img src={img} alt='' style={{borderRadius:'50%',width:'150px',height:'150px'}}/> */}
            <label className="mx-auto title-login">تسجيل الدخول</label>
            <input
              onChange={e=> setUsername(e.target.value)}
                placeholder="الاسم..."
                type="text"
                className="user-input my-3 pe-2"
            />
            <input
               onChange={e=> setPassword(e.target.value)}
                placeholder="كلمه السر..."
                type="password"
                className="user-input my-3 pe-2"
            />
            <button  className="btn-login mx-auto mt-4">تسجيل الدخول</button>
            <label className="mx-auto my-4">
                ليس لديك حساب ؟{" "}
                <Link to="/register" style={{ textDecoration: 'none' }}>
                    <span style={{ cursor: "pointer" }} className="text-danger">
                        اضغط هنا
                    </span>
                </Link>
            </label>


            <label className="mx-auto my-4">

                  هل نسيت كلمه السر
              
            </label>

            {/* {isPress === true ? (loading === true ? (<Spinner animation="border" role="status">

            </Spinner>) : null) : null} */}


        </Form>



    </Row>
    <ToastContainer />
</Container>
 
  )
}

export default Login