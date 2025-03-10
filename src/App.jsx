import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home.jsx"));
const Tips = lazy(() => import("@/pages/Tips.jsx"));
const Shop = lazy(() => import("@/pages/Shop.jsx"));

import LoadingWindows from "@/components/LoadingWindow/LoadingWindows.jsx";
import Header from "@/components/Header/Header.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import "./styles/main.css";

const App = () => {
  return (
      <Router>
        <Header />
        <Suspense fallback={<LoadingWindows />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tips" element={<Tips />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
  );
};

export default App;
