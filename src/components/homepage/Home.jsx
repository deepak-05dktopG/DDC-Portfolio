import React, { useEffect } from "react";
import confetti from "canvas-confetti"
import { Link, useNavigate } from "react-router-dom";
import './homepage.css';
import WAVES from 'vanta/dist/vanta.waves.min';
// 3d btn
import {AwesomeButton} from 'react-awesome-button';
// import 'react-awesome-button/dist/styles.css';
// import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';



const Home = () => {
  const navigate = useNavigate()

  const handleexploremore = () => {
    setTimeout(() => {
      navigate('/')
    }, 1500)
  }
  // useeffect for vanta.js wave effect
  useEffect(() => {
    WAVES({
      el: "#vanta-clouds",
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x80821,
      shininess: 45.00,
      waveHeight: 11.00,
      waveSpeed: 0.50,
      zoom: 0.79
    })
  }, [])


  // npm install --save canvas-confetti & import that confetti 
  const confettibtn = () => {
    confetti({
      particleCount: 1000,
      spread: 250,
      scalar: 2
    })
  }
  const confettibtn1 = () => {
    confetti({
      particleCount: 3,
      spread: 1000,
      scalar: 1
    })
  }
  const callconfettiandexplore=()=>{
    confettibtn();
    handleexploremore();
  }





  return (
    <div id="vanta-clouds" className="homepage1">

      {/* content for background start anumation*/}






      <div style={{ height: '100vh' }} className="homepage d-flex flex-column justify-content-around container">

        {/* Brandname and position */}
        <div className="brandname text-white text-center ">
          <div data-aos="zoom-out" data-aos-duration="3000" className="name m-0">  <span data-aos="">D</span>eepak <span>D</span>igital <span>C</span>raft</div>
          <div className="position" data-aos="fade-right" data-aos-duration="2000">Freelancer</div>
        </div>
        {/* welcome and content */}
        <div className="welcomecontent text-center text-white ">
          <div className="welcome pb-2" data-aos="zoom-in" data-aos-duration="2000">Welcome!</div>
          <div className="content " data-aos="fade-up" data-aos-duration="2000">I help businesses and individuals bring their ideas to life with design, development, writing, etc. Whether you need a sleek website, captivating content, or innovative solutions, you've come to the right place.</div>
        </div>

        {/* vision and expertise */}

        <div className="visionintro text-center ">
          <div className="slogan " data-aos="zoom-in" data-aos-duration="2000">Your Vision, My Expertise</div>
          <div className="slogancontent " data-aos="zoom-in" data-aos-duration="3000">Together, we can create something extraordinary.</div>
        </div>

        {/* next step */}

        <div onMouseMove={confettibtn1} className="nextstep text-center ">
          <div className="content" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="3000">Ready to take the next step? Explore more and see how I can help.</div>
          {/* link to the main pages */}

          <div className="awesome-button-wrapper " data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1000" data-aos-anchor-placement="top-bottom"   onClick={callconfettiandexplore}>
            
            <AwesomeButton className="mt-2 w-50">Explore More</AwesomeButton>
          </div>
        </div>


      </div>


    </div>
  );
};

export default Home;
