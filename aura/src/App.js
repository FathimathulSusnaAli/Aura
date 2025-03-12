import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "./Pages/ShoppingCart";
import Women from "./Pages/Women.js";

import CategoriesMain from "./Components/CategoriesMain/CategoriesMain";
import Footer from "./Components/Footer/Footer";
import LoginSignup from './Pages/LoginSignup';



// Here we have
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Women />} />
          
          <Route path="/latest" element={<shopcategory category="latest" />} />
          <Route path="/about" element={<shopcategory category="about" />} />
          <Route path="/product" element={<product />}>
            <Route path=":productId" element={<product />} />
          </Route>
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
      
      {/* <div>
      <CategoriesMain />
    </div> */}
    <Footer />
    </div>
  );
}

export default App;
