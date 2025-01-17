import "./App.css";
import React from "react";
// Router
import { BrowserRouter as Router, Routes, Route, useLocation, } from "react-router-dom";
// components import
import Footer from "./components/footer/Footer";
import Home from "./components/homepage/Home";
import Aboutme from "./components/aboutpage/Aboutme";
import Service from "./components/servicepage/Service";
import Contact from "./components/contactpage/Contact";
import { motion, useScroll, useSpring } from "framer-motion";


function App() {

  function ScrollToTop() {
    const location = useLocation();

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    return null;
  }

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });



  return (
    <div className="Body">

      <motion.div className="z-2 progress-bar-top" style={{ scaleX }} ></motion.div>
      <Router basename="/DDC-Portfolio">
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
