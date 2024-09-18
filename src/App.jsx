import React from 'react';
import './index.css'
import Navbar from './components/navbar/Navbar'
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import LoginPopUp from './components/LoginPopUp/LoginPopUp';
import { useState } from 'react';
const App = () => {
  const[showlogin,setShowLogin] = useState(false)
  return (
    <>
    {
      showlogin ? <LoginPopUp setShowLogin={setShowLogin}/>:<></>
    }
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/cart' element={<Cart></Cart>}/>
        <Route path='/order' element={<PlaceOrder></PlaceOrder>}/>
      </Routes>
      
    </div>
    <Footer/>
    </>
    
  )
}

export default App
