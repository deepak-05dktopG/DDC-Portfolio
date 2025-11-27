import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import Navbar from './components/navbar/Navbar';
import Home from './components/homepage/Home';
import Aboutme from './components/aboutpage/Aboutme';
import Service from './components/servicepage/Service';
import Contact from './components/contactpage/Contact';
import './App.css';
import AOS from 'aos';


function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  function ScrollToTop() {
    const location = useLocation();
    React.useEffect(() => {
      window.scrollTo(0, 0);
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }, [location]);
    return null;
  }


  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center space-y-4">
          <div className="relative w-24 h-24 mx-auto">
            <div className="absolute inset-0 border-4 border-primary/30 rounded-full animate-ping"></div>
            <div className="absolute inset-0 border-4 border-t-primary rounded-full animate-spin"></div>
          </div>
          <h2 className="text-2xl font-heading font-bold text-white tracking-widest animate-pulse">
            INITIALIZING SYSTEM...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Layout>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutme />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default App;
