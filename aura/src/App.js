import "./App.css";
import React from "react";
import Navbar from "./Components/LandingPage/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Women from "./Pages/LandingPages/Women";
import FilterPage from "./Pages/FilterPages/FilterPage.js";
import CategoriesMain from "./Components/LandingPage/CategoriesMain/CategoriesMain";
import Footer from "./Components/LandingPage/Footer/Footer";
import Login from "./Pages/AuthPages/Login"; 
import Signup from "./Pages/AuthPages/Signup"; 
import AuthPage from "./Pages/AuthPages/AuthPage"; 
import ProfilePage from "./Pages/ProfilePages/ProfilePage.js";




function App() {
  return (
    <div>
 <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Women />} />
          <Route path="/latest" element={<CategoriesMain category="latest" />} />
          <Route path="/about" element={<CategoriesMain category="about" />} />
          <Route path="/product" element={<CategoriesMain category="product" />}>
            <Route path=":productId" element={<CategoriesMain category="product" />} />
          </Route>
          <Route path="/filters" element={<FilterPage />} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} /> {/* Separate Login Route */}
          <Route path="/signup" element={<Signup />} /> {/* Separate Signup Route */}

          {/* Optional AuthPage for Grouped Auth Routes */}
          <Route path="/auth/*" element={<AuthPage />} />

          <Route path="/profile/*" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
      
      
    <Footer />
    </div>
  );
}

export default App;