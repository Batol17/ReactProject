// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import Hero404 from './component/Hero404';
import Products from './component/Products';
import { Route, Routes } from 'react-router-dom';
import SliderComponent from './component/SliderComponent';
import ProductDetails from './component/ProductDetails';
import Categories from './component/Categories';
import storeContext from './component/hooks/storeContext';
import { useEffect, useState } from 'react';
import Cart from './component/Cart';
import Login from './component/Login';

function App() {
  
  const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <storeContext.Provider value={{ products, setProducts }}>
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <SliderComponent />
              <Categories />
              <Products />
            </>
          } />
          <Route path="/*" element={<Hero404 />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </storeContext.Provider>
    </div>
  );
}

export default App;

