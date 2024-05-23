import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./App.scss";
// Pages
import Home from "./pages/Home.js";
import Info from "./pages/Info.js";
import Arts from "./pages/Arts.js";
import Foods from "./pages/Foods.js";
import TourLocation from "./pages/TourLocation.js";
import Videos from "./pages/Video.js";
import Review from "./pages/Review.js";
import NotFound from "./pages/NotFound.js";
//components
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta property="og:site_name" content="Tour in South Korea" />
        <meta
          property="og:title"
          content="Explore Korea: Your Ultimate Travel Destination"
        />
        <meta property="og:url" content="사이트 주소" />
        <meta
          property="og:description"
          content="Discover the wonders of Korea with our comprehensive travel guide. From vibrant cities to serene landscapes, experience the best of Korean culture, cuisine, and attractions."
        />
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/artinkorea" element={<Arts />} />
        <Route path="/foodinkorea" element={<Foods />} />
        <Route path="/tourist" element={<TourLocation />} />
        <Route path="/vidoes" element={<Videos />} />
        <Route path="/review" element={<Review />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
