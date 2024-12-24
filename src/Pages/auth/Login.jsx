import React from 'react'
// import img from '../../../img/login.png'
import {  Col, Container,  Row, ToastContainer } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Login&Register.css'
const Login = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
    <Row className="py-5 d-flex justify-content-center ">
        <Col sm="6"  className="login    d-flex flex-column align-item-center ">
        {/* <img src={img} alt='' style={{borderRadius:'50%',width:'150px',height:'150px'}}/> */}
            <label className="mx-auto title-login">تسجيل الدخول</label>
            <input
              
                placeholder="الايميل..."
                type="email"
                className="user-input my-3 pe-2"
            />
            <input
              
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


        </Col>



    </Row>
    <ToastContainer />
</Container>
 
  )
}

export default Login