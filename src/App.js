
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './pages/Home/HomePage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login.jsx';
import NavBar from './component/utility/navbar/NavBar.jsx';
import Footer from './component/utility/footer/Footer.jsx';
import Register from './pages/auth/Register.jsx';
import AllProduct from './pages/product/AllProduct.jsx';
import AllBrand from './pages/brand/AllBrand.jsx';
import Slider from 'react-slick';


function App() {
  
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
          <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='allBrand' element={<AllBrand />} />
                <Route path='allProduct' element={<AllProduct />} />            
          </Routes>
      </BrowserRouter>
       <Footer/>
    </div>
  );
}

export default App;

