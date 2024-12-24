// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/Home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/auth/Login.jsx';
import NavBar from './component/utility/navbar/NavBar';
import Footer from './component/utility/footer/Footer';
import Register from './Pages/auth/Register.jsx';

function App() {
  
 

  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes>
              <Route path='login' element={<Login />} />
              <Route path='register' element={<Register />} />
              <Route path='/' element={<HomePage />} />

              
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

