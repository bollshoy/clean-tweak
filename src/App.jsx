import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoadingWindows from "@/components/LoadingWindow/LoadingWindows.jsx";
import Home from "@/pages/Home.jsx";
import Tips from "@/pages/Tips.jsx";
import Shop from "@/pages/Shop.jsx";
import Header from "@/components/Header/Header.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import "./styles/main.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeOut(true), 700);
    setTimeout(() => setLoading(false), 1200);
  }, []);

  return (
    <>
      {loading && <LoadingWindows className={fadeOut ? "fade-out" : ""} />}
      <div className={`app-content ${loading ? "hidden" : "fade-in"}`}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home loading={loading} />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
