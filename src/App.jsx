
import React from 'react'
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import Shop from "./Components/Shop/Shop";
import LandingPage from './Components/LandingPage/LandingPage';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Cart from './Components/Cart/Cart';
import './App.css';
import './Assets/javascript/javascript.js';
import SingleProduct2 from './Components/SingleProduct/SingleProduct2';
import SingleProduct3 from './Components/SingleProduct/SingleProduct3';
import SingleProduct4 from './Components/SingleProduct/SingleProduct4';
import SingleProduct5 from './Components/SingleProduct/SingleProduct5';
import SingleProduct6 from './Components/SingleProduct/SingleProduct6';
import SingleProduct7 from './Components/SingleProduct/SingleProduct7';
import SingleProduct8 from './Components/SingleProduct/SingleProduct8';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />            {/* Note-> forward / means home page */}
        <Route path='/shop' element={<Shop />} />
        <Route path='/singleproduct' element={<SingleProduct/>}/>
        <Route path='/singleproduct2' element={<SingleProduct2/>}/>
        <Route path='/singleproduct3' element={<SingleProduct3/>}/>
        <Route path='/singleproduct4' element={<SingleProduct4/>}/>
        <Route path='/singleproduct5' element={<SingleProduct5/>}/>
        <Route path='/singleproduct6' element={<SingleProduct6/>}/>
        <Route path='/singleproduct7' element={<SingleProduct7/>}/>
        <Route path='/singleproduct8' element={<SingleProduct8/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  );
};

export default App;