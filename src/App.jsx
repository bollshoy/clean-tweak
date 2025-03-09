import React, { useState, useEffect, lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoadingWindows from "@/components/LoadingWindow/LoadingWindows.jsx";
import Header from "@/components/Header/Header.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import Recleaner from "@/components/Recleaner/Recleaner.jsx";
import Form from "@/components/Form/Form.jsx";
import "./styles/main.css";

const Home = lazy(() => import("@/pages/Home.jsx"));
const Tips = lazy(() => import("@/pages/Tips.jsx"));
const Shop = lazy(() => import("@/pages/Shop.jsx"));
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
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home loading={loading} />} />
              <Route path="/tips" element={<Tips />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          </Suspense>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;
