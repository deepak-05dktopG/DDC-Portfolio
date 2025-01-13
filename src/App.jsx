import "./App.css";
// Router
import { Routes, Route } from "react-router-dom";
// components import
import Footer from "./components/footer/Footer";
import Home from "./components/homepage/Home";
import Aboutme from "./components/aboutpage/Aboutme";
import Service from "./components/servicepage/Service";
import Contact from "./components/contactpage/Contact";
import { motion, useScroll, useSpring } from "framer-motion";


function App() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });



  return (
    <div className="Body">

<motion.div className="z-2 progress-bar-top" style={{ scaleX }} ></motion.div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutme/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      

    </div>
  );
}

export default App;
