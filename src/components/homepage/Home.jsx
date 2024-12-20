import React from "react";
import { Link } from "react-router-dom";
import './homepage.css'
const Home = () => {
  return (
    <div className="homepage1">
      <div className="homepage container pt-5">

        {/* Brandname and position */}
        <div className="brandname text-white text-center ">
          <div className="name text-warning h1 fw-bold m-0">  <span>D</span>eepak <span>D</span>igital <br /><span>C</span>raft</div>
          <div className="position fs-5 fw-bold">Freelancer</div>
        </div>

        {/* welcome and content */}
        <div className="welcomecontent text-center text-white mt-2 mt-md-5 pt-4">
          <div className="welcome fs-1 fw-bold text-white pb-2">Welcome!</div>
          <div className="content fw-bold fs-5">I help businesses and individuals bring their ideas to life with design, development, writing, etc. Whether you need a sleek website, captivating content, or innovative solutions, you've come to the right place.</div>
        </div>

        {/* vision and expertise */}

        <div className="visionintro text-center mt-5">
          <div className="slogan fs-2 fw-bold">Your Vision, My Expertise</div>
          <div className="slogancontent text-white fs-5 fw-bold">Together, we can create something extraordinary.</div>
        </div>

        {/* next step */}

        <div className="nextstep text-center mt-5">
          <div className="content text-white fw-bold fs-5">Ready to take the next step? Explore more and see how I can help.</div>
          {/* link to the main pages */}
          <Link to='/about'>
            <button className="btn btn-lg btn-warning mt-4 w-75 fw-bold">Explore More</button>
          </Link>
        </div>


      </div>
    </div>
  );
};

export default Home;
