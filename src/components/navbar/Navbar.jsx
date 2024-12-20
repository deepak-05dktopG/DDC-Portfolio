import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      <nav className="d-flex justify-content-around w-100 bg-dark">
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      
    </>
  );
}

export default Navbar;

