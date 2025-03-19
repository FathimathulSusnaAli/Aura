import "./App.css";
import React from "react";
import Navbar from "./Components/LandingPage/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Cart from "./Pages/LandingPages/Cart";
import Women from "./Pages/LandingPages/Women";
import FilterPage from "./Pages/FilterPages/FilterPage.js";

import CategoriesMain from "./Components/LandingPage/CategoriesMain/CategoriesMain";
import Footer from "./Components/LandingPage/Footer/Footer";
import LoginSignup from './Pages/LandingPages/LoginSignup';



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
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path='/login' element={<LoginSignup/>}/>
          <Route path="/filters" element={<FilterPage />} />
        </Routes>
      </BrowserRouter>
      
      
    <Footer />
    </div>
  );
}

export default App;
