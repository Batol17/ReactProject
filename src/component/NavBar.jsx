import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { PiShoppingCartThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import { useSelector } from 'react-redux';
function NavBar() {
 const products=useSelector(state => state.cart.products)

  return (
    <Navbar className="bg-white shadow ">
      <Container>
            <img src={logo} alt="" className='handle-img'/>        
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <ul className='d-flex gap-2 my-auto'>    
          <li className='list-group-item m-auto'>
          <form className="d-flex my-auto">
          <Link to='/cart' className="nav-link ">
                <button className="btn btn-outline-dark" type="submit">
                <PiShoppingCartThin className='pe-1 fs-4'/> 
                    Cart
                    <span className="badge bg-dark text-white ms-1 rounded-pill">{products.length}</span>
                </button>
           </Link>
          </form>  
          </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;