import {  Button, Col, Container, Form, Image, Nav, Navbar, NavDropdown, Row } from "react-bootstrap"
import imagee from '../../../img/logo.jpg'
import { CiLogin } from "react-icons/ci";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import './NavBar.css'
import { Link } from "react-router-dom";
const NavBar=()=>{
     
    return(
      // style={{backgroundColor:`#e9e9e9`}}
        <Navbar className=" sticky-top bg-nav shadow" style={{backgroundColor:'#f3f3f3'}}  variant="light" expand="sm">
        <Container >
            <a href="/">
               <Image src={imagee}   className="logo_img ms-1"/>
            </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex w-100 mt-2">
              <Form.Control
                type="search"
                placeholder="بحث.."
                className="me-2 w-100 "
                aria-label="Search"
            /></Form>
            <Nav
              className="me-auto"
                            
            >
            <Nav.Link href="login" className="fs-3 d-flex justify-content-center " style={{color:'#4d4f50'}}> 
             
                 <CiLogin/>
          
            </Nav.Link> 
            <Nav.Link href="#"  className="fs-3 d-flex justify-content-center"  style={{color:'#4d4f50'}}> 
            <PiShoppingCartThin/>
            </Nav.Link> 
          
            </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    
      
 
    )
}

export default NavBar