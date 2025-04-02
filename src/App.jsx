import "./App.css";
import AOS from 'aos';
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
import React, { useState, useRef, useEffect } from "react";
// Router
import { BrowserRouter as Router, Routes, Route, useLocation, } from "react-router-dom";
// components import
import SplashCursor from "./components/magicui/Splashcurser";
import Footer from "./components/footer/Footer";
import Home from "./components/homepage/Home";
import Aboutme from "./components/aboutpage/Aboutme";
import Service from "./components/servicepage/Service";
import Contact from "./components/contactpage/Contact";
import { motion, useScroll, useSpring } from "framer-motion";
import { Linkedin, Mail, Github, Instagram, ChevronsUp } from 'lucide-react';


function App() {
  const [loader, setLoader] = useState(true)
  const divRef = useRef(null);

//   const toggleVisibility = () => {
//     if (divRef.current) {
//         // Check if the div is currently hidden
//         if (divRef.current.style.display === 'none') {
//             divRef.current.style.display = 'block'; // Show the div
//         } else {
//             divRef.current.style.display = 'none'; // Hide the div
//         }
//     }
// };
  //go to top of the page
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show button if scrolled more than halfway
      if (scrollPosition < 500) {
        divRef.current.style.display = 'none';
        divRef.current.style.opacity="0%";

      } else {
        divRef.current.style.display = 'block'; // Hide the div
        divRef.current.style.opacity="70%";
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  //intro welcome loading
  useEffect(() => {
    setInterval(() => {
      setLoader(false)
    }, 5500);
  }, [])

  // useEffect(() => {
  //   const handleLoad = () => {
  //     // Start the interval only after the window has loaded
  //     const intervalId = setInterval(() => {
  //       setLoader(false);
  //       clearInterval(intervalId); // Clear the interval after setting loader to false
  //     }, 5000);
  //   };

  //   // Add event listener for window load
  //   window.addEventListener('load', handleLoad);

  //   // Cleanup function to remove the event listener
  //   return () => {
  //     window.removeEventListener('load', handleLoad);
  //   };
  // }, []);

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
      <div ref={divRef} style={{position:"absolute",bottom:"0",right:"0",opacity:"0"}} className="d-flex bg-primary rounded-2 z-2 align-items-end justify-content-end  position-fixed    ">
        <div
           onClick={scrollToTop}
          className="scrolltop  z-1 text-white text-end "

          style={{ cursor: 'pointer', height: "fit-Content" }}
        >
          <ChevronsUp size={40} />
        </div>
      </div>


      <SplashCursor />

      {loader ?

        <div className="loader">
          <div className="ph1">
            <div className="record"></div>
            <div className="record-text ">WELCOME</div>
          </div>
          <div className="ph2">
            <div className="laptop-b"></div>
            <svg
              className="laptop-t"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 42 30"
            >
              <path
                d="M21 1H5C2.78 1 1 2.78 1 5V25a4 4 90 004 4H37a4 4 90 004-4V5c0-2.22-1.8-4-4-4H21"
                pathLength="100"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
              ></path>
            </svg>
          </div>
          <div className="icon1"></div>
        </div>













        : <div>

          <motion.div className="z-2 progress-bar-top" style={{ scaleX }} ></motion.div>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/about" element={<Home />} />
              <Route path="/" element={<Aboutme />} />
              <Route path="/service" element={<Service />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>

        </div>}


    </div>
  );
}

export default App;
