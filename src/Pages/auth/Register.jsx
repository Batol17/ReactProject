import React from 'react'
import './Login&Register.css'
import { Col, Container, Row, ToastContainer } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
    <Row className="py-5 d-flex justify-content-center ">
        <Col sm="6"  className="login    d-flex flex-column align-item-center ">
        {/* <img src={img} alt='' style={{borderRadius:'50%',width:'150px',height:'150px'}}/> */}
            <label className="mx-auto title-login"  > انشاء حساب</label>
            <input
              
              placeholder="الاسم الكامل..."
              type="text"
              className="user-input my-3 pe-2"
          />
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
            <button  className="btn-login mx-auto mt-4">انشاء حساب</button>
            <label className="mx-auto my-4">
                 لديك حساب ؟{" "}
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <span style={{ cursor: "pointer" }} className="text-danger">
                      قم بتسجيل دخول
                    </span>
                </Link>
            </label>

            {/* {isPress === true ? (loading === true ? (<Spinner animation="border" role="status">

            </Spinner>) : null) : null} */}


        </Col>



    </Row>
    <ToastContainer/>
</Container>
  )
}

export default Register