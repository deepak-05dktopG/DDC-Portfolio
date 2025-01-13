import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import './navbar.css'

function Navbar() {
  const [themeimage, setthemeimage] = useState(() => {
    const savedthemeimage = localStorage.getItem('themeimage');
    return savedthemeimage ? savedthemeimage : '🔆';
  });

  const navlink = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      fontSize: isActive ? "normal" : "normal",
      color: isActive ? "rgb(255, 74, 24)" : " ",
      letterSpacing: isActive ? "2px" : "0px",
    };
  };


  const switchtheme = () => {
    if (themeimage == '🔆') {
      document.querySelector('body').setAttribute('dark-theme', 'light');
      setthemeimage('🌙');
      localStorage.setItem("themeimage",'🌙')
    }
    else if (themeimage == '🌙') {
      document.querySelector('body').setAttribute('dark-theme', 'dark');
      setthemeimage('🔆');
      localStorage.setItem("themeimage",'🔆')
    }
    console.log("rendered");
  }





  return (
    <>
      <nav className="d-flex  justify-content-around py-3 w-100">
        <NavLink style={navlink} className=" ddc text-danger text-decoration-none ps-3" to="/">DDC</NavLink>
        <NavLink style={navlink} className="navitem text-decoration-none" to="/about">Portfolio</NavLink>
        <NavLink style={navlink} className="navitem text-decoration-none" to="/service">Service</NavLink>
        <NavLink style={navlink} className="navitem text-decoration-none" to="/contact">Contact</NavLink>
        <div className="text-white text-decoration-none pe-3" > <span style={{cursor:'pointer'}} className="fs-5" onClick={switchtheme}>{themeimage}</span> </div>



      </nav>


    </>
  );
}

export default Navbar;

