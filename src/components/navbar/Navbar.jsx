import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import './navbar.css'

function Navbar() {
  const [themeimage, setthemeimage] = useState("🔆");
  const themeicon=localStorage.getItem('themeimage');
  const navlink = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      fontSize: isActive ? "normal" : "normal",
      color: isActive ? "rgb(255, 74, 24)" : " ",
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
      <nav  className="d-flex  justify-content-between align-items-center py-3 w-100">
        <NavLink style={navlink} className=" ddc text-danger text-decoration-none ps-3" to="/about">DDC</NavLink>
        <NavLink style={navlink} className="navitem text-decoration-none" to="/">Portfolio</NavLink>
        <NavLink style={navlink} className="navitem text-decoration-none" to="/service">Service</NavLink>
        <NavLink style={navlink} className="navitem text-decoration-none" to="/contact">Contact</NavLink>
        <div className="text-white   text-decoration-none " > <span style={{cursor:'pointer'}} className="fs-5 p-3" onClick={switchtheme}>{themeicon}</span> </div>



      </nav>


    </>
  );
}

export default Navbar;

