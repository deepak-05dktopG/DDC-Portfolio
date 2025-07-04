
import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Typewriter from 'typewriter-effect';
import { AwesomeButton } from "react-awesome-button";
import { Download, BrandLinkedin, BrandGithub, BrandInstagram } from 'tabler-icons-react';
import './about.css';
import '/src/App.css'
import ReadMoreArea from '@foxeian/react-read-more';
import { motion, useScroll, useSpring } from "framer-motion";
import SimpleParallax from "simple-parallax-js";
import Headroom from "react-headroom";
import { BorderBeam } from "@/components/magicui/border-beam.jsx";
import ScrollProgress from "@/components/magicui/scroll-progress";
import WordRotate from "@/components/magicui/word-rotate";

// import ShineBorder from "@/components/magicui/shine-border.jsx";

// import TextReveal from '@/components/ui/text-reveal';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

// import images
import skillbackground from "/src/images/SkillBack1.png"
import Deepak from '/src/images/Profile pHoto.jpg'
import DeepakLandscape from '/src/images/deepaklandscap.jpg'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import HTML from "/src/images/HTML.png";
import CSS from "/src/images/CSS.png";
import JS from "/src/images/JS.png"

import Reactlogo from "/src/images/Reactjs.png"
import Bootstraplogo from "/src/images/Bootstrap.png"
import FramerMotionlogo from "/src/images/FramerMotion.png"
import GsapLogo from "/src/images/Gsap.png"

import Figmalogo from "/src/images/Figma.png"
import Gitlogo from "/src/images/Git.png"
import RINGS from 'vanta/dist/vanta.birds.min';

import NodeLogo from "/src/images/NodeJs.jpeg"
import Expresslogo from "/src/images/ExpressJs.jpeg"
import Pythonlogo from "/src/images/Python.png"
import javalogo from "/src/images/Java.png"
import sqllogo from "/src/images/Sql.png"
import mongodblogo from "/src/images/MongoDB.jpeg"
import myresume from "/src/images/DeepakResume.docx"
import myresumepdf from "/src/images/DeepakResume.pdf"
//weatherProjectImages
import weatherimg1 from "/src/images/weatherproject/img1.png"
import weatherimg2 from "/src/images/weatherproject/img2.png"
import weatherimg3 from "/src/images/weatherproject/img3.png"
import weatherimg4 from "/src/images/weatherproject/img4.png"
//movieProjectImages
import movieimg1 from "/src/images/movieproject/img1.png"
import movieimg2 from "/src/images/movieproject/img2.png"
import movieimg3 from "/src/images/movieproject/img3.png"
import movieimg4 from "/src/images/movieproject/img4.png"
//Ecommerceprojectimages
import ecommerceimg1 from "/src/images/Ecommerceproject/img1.png"
import ecommerceimg2 from "/src/images/Ecommerceproject/img2.png"
import ecommerceimg3 from "/src/images/Ecommerceproject/img3.png"
import ecommerceimg4 from "/src/images/Ecommerceproject/img4.png"
//PortfolioprojectImages
import portfolioimg1 from "/src/images/PortfolioProject/img1.png"
import portfolioimg2 from "/src/images/PortfolioProject/img2.png"
import portfolioimg3 from "/src/images/PortfolioProject/img3.png"
import portfolioimg4 from "/src/images/PortfolioProject/img4.png"

//QualityPicks images
import qualitypicksimg1 from "/src/images/QualityPicks/homepage.png"
import qualitypicksimg2 from "/src/images/QualityPicks/homepage2.png"
import qualitypicksimg3 from "/src/images/QualityPicks/product.png"
import qualitypicksimg4 from "/src/images/QualityPicks/productdetail.png"

function Aboutme() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });
  const buttonStyle = {
    color: 'blue', // Change to your desired color
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const skill = [
    {
      Id: 1,
      heading: 'Frontend', skills: [
        { Id: 1, image: `${HTML}`, tooltip: "this is html", percentage: 98 },
        { Id: 2, image: `${CSS}`, tooltip: "this is css", percentage: 95 },
        { Id: 3, image: `${JS}`, tooltip: "this is javascript", percentage: 90 }]
    },
    {
      Id: 2,
      heading: 'Frameworks & Libraries', skills: [
        { Id: 1, image: `${Reactlogo}`, tooltip: "this is Reactjs", percentage: 85 },
        { Id: 2, image: `${Bootstraplogo}`, tooltip: "this is Bootstrap", percentage: 90 },
        { Id: 3, image: `${FramerMotionlogo}`, tooltip: "this is Framermotion", percentage: 85 },
        { Id: 4, image: `${GsapLogo}`, tooltip: "this is Gsap", percentage: 50 }]
    },
    {
      Id: 3,
      heading: 'Tools', skills: [
        { Id: 1, image: `${Figmalogo}`, tooltip: "this is Figma", percentage: 85 },
        { Id: 2, image: `${Gitlogo}`, tooltip: "this is Git", percentage: 70 },
      ]
    },
    {
      Id: 4,
      heading: 'Backend', skills: [
        { Id: 1, image: `${NodeLogo}`, tooltip: "this is Nodejs", percentage: 85 },
        { Id: 2, image: `${Expresslogo}`, tooltip: "this is Expressjs", percentage: 90 },
        { Id: 3, image: `${Pythonlogo}`, tooltip: "this is Python", percentage: 50 },
        { Id: 4, image: `${javalogo}`, tooltip: "this is Java", percentage: 50 }]
    },
    {
      Id: 5,
      heading: 'DataBase', skills: [
        { Id: 1, image: `${sqllogo}`, tooltip: "this is SQL", percentage: 50 },
        { Id: 2, image: `${mongodblogo}`, tooltip: "this is MongoDB", percentage: 90 },
      ]
    },




  ]
  const projects = [
    {
      Id: 0,
      projectimg1: [`${qualitypicksimg1}`, `${qualitypicksimg2}`, `${qualitypicksimg3}`, `${qualitypicksimg4}`],
      projecttitle: "QualityPicks",
      projectlink: "https://qualitypicks.vercel.app",
      projectcontent: "We save you time by testing and researching products so you can shop with confidence. Every item on our site has been carefully selected for its quality and value. We believe in transparency, so we provide detailed information about each product, including its features, benefits, and any potential drawbacks. Our goal is to help you make informed decisions and find the best products for your needs.",
      projecttech: ["React", "API Integration", "Bootstrap5", "Node JS", "Express js" ,"MongoDB"],
    },
    {
      Id: 1,
      projectimg1: [`${weatherimg1}`, `${weatherimg2}`, `${weatherimg3}`, `${weatherimg4}`],
      projecttitle: "Weather App",
      projectlink: "https://ddcweather.netlify.app/",
      projectcontent: "A Weather Application using the OpenWeather API, which provides real-time weather updates for any location. The app displays key details like temperature, wind speed, and the current time of your selected area. To make it even more engaging, I’ve integrated real-time weather animations in the background that adapt to the current weather conditions!",
      projecttech: ["React", "API Integration", "Bootstrap5", "Vanta Js", "OpenWeatherAPI"],
    },
    {
      Id: 2,
      projectimg1: [`${movieimg1}`, `${movieimg2}`, `${movieimg3}`, `${movieimg4}`],
      projecttitle: "MovieWeb",
      projectlink: "https://ddcmovies.netlify.app",
      projectcontent: "Dive into a cinematic journey where you can easily browse through a wide selection of movies. Choose your favorite films, explore their ratings, and learn about their genre to help guide your future viewing preferences. Whether you’re looking for your next movie night pick or exploring new genres, this platform makes it easier than ever to discover your next favorite film.",
      projecttech: ["React", "BrowserRoute", "API Integration", "Bootstrap5", "Animation On Scroll"],
    },
    {
      Id: 3,
      projectimg1: [`${ecommerceimg1}`, `${ecommerceimg2}`, `${ecommerceimg3}`, `${ecommerceimg4}`],
      projecttitle: "EcommerceFrontend",
      projectlink: "https://deepak-05dktopg.github.io/host-ecommerce/#home",
      projectcontent: "The e-commerce frontend i developed is a responsive and visually appealing platform designed for seamless online shopping. It features intuitive navigation, detailed product displays, and secure checkout integration to enhance user experience. Built using modern web technologies, it ensures fast, interactive performance across devices. With user accounts, payment gateways, and review systems, it fosters convenience and trust for customers.",
      projecttech: ["HTML", "CSS", "JavaScript", "Bootstrap5", "FlexBox", "Hover", "Animation"],
    },
    {
      Id: 4,
      projectimg1: [`${portfolioimg2}`, `${portfolioimg1}`, `${portfolioimg3}`, `${portfolioimg4}`],
      projecttitle: "Portfolio",
      projectlink: "https://deepakdigitalcraft.tech/",
      projectcontent: "The portfolio project i created is a modern, visually striking website that showcases your skills and achievements. It incorporates various external libraries to enhance functionality and design, providing an interactive user experience. The site features a clean layout, smooth animations, and responsive design, ensuring accessibility across devices. This project effectively highlights your expertise while demonstrating your ability to integrate cutting-edge web technologies.",
      projecttech: ["React", "FramerMotion", "Magic UI", "GSAP", "Bootstrap5", "SplashCurser"],
    }

  ]


  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )
  // useEffect(() => {
  //   RINGS({
  //     el: "#vanta-clouds",
  //     mouseControls: true,
  //     touchControls: true,
  //     gyroControls: false,
  //     minHeight: 200.00,
  //     minWidth: 200.00,
  //     scale: 1.00,
  //     scaleMobile: 1.00,
  //     backgroundColor: 'rgba(0, 0, 255, 0.3)',
  //     color1: "blue",
  //     color2: "violet",
  //     colorMode: "lerp",
  //     birdSize: 2.20,
  //     wingSpan: 26.00,
  //     speedLimit: 7.00,
  //     separation: 96.00,
  //     alignment: 24.00,
  //     cohesion: 81.00,
  //     quantity: 4.00
  //   })
  // }, [])






  return (
    <>


      {/* <motion.div className="z-2 progress-bar" style={{ scaleX }} ></motion.div> */}


      <Headroom className="" >
        <Navbar />
      </Headroom>
      <div id="vanta-clouds" className="Hero d-flex flex-column justify-content-center">
        <div className="Hero_text">
          <div data-aos="fade-up">Hey, there <span className="hi" data-aos="flip-left">👋</span></div>
          <div data-aos="fade-up" data-aos-delay="200">I’m <span className="name"> Deepakkumar</span></div>
          <div data-aos="fade-up" data-aos-delay="300" className="d-flex align-items-center" >a <span className="roles"> <Typewriter
            options={{
              strings: ['AI Enthusiast', 'Freelancer', 'Web Developer', 'Designer'],
              autoStart: true,
              loop: true,
            }}
          /></span>

          </div>






          {/* <div className="button">

            <a href="src/images/DeepakkumarResume.pdf" download target="_blank"> <AwesomeButton type="secondary" className="mt-2">Resume
              <span className=""><Download size={25} strokeWidth={2} color={'black'} /></span>
            </AwesomeButton></a>
          </div> */}

          <div data-aos="fade-up" data-aos-delay="400" className="button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            <AwesomeButton type="secondary" className="mt-2">Resume
              <span className=""><Download size={25} strokeWidth={2} color={'black'} /></span>
            </AwesomeButton>
          </div>




          <div className="offcanvas  offcanvas-end w-100 " tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">

            <div class="offcanvas-body">
            </div>

            <div className="d-flex p-2 gap-2 bg-dark justify-content-end">
              <button className="btn btn-outline-danger text-white" type="button" data-bs-dismiss="offcanvas" >Close</button>
              <button className="btn btn-outline-success text-white ">
                <Download size={25} strokeWidth={2} color={'white'} />
                <a href={myresume} download className=" text-white border border-0 " style={{ padding: '10px', textDecoration: 'none' }}> docs.x </a>
                <span classname='fs-2 fw-bold'>|</span>
                <a href={myresumepdf} download className=" border  border-0  border-success text-white" style={{ padding: '10px', textDecoration: 'none' }}> .pdf </a></button>
            </div>
          </div>





          <div className="Hero_Social_Medias m-lg-0">
            <a data-aos="fade-up" data-aos-delay="500" href="#aboutme" className=""><AwesomeButton className="" type="danger"> <span className="text-white">AboutMe ▶</span></AwesomeButton></a>
            <a data-aos="fade-up" data-aos-delay="600" href="#skills" className=""> <AwesomeButton className="" type="danger"><span className="text-white">Skills ▶</span> </AwesomeButton></a>
            <a data-aos="fade-up" data-aos-delay="700" href="#projects" className=""> <AwesomeButton className="" type="danger">  <span className="text-white">Projects ▶</span> </AwesomeButton></a>
          </div>

        </div>



      </div>

      <div className="container1"></div>
      {/* <ShineBorder
        className="relative flex h-[500px] w-25 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <span className="pointer-events-none bg-white whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Shine Border
        </span>
      </ShineBorder> */}


      <div data-aos="fade-up" id="aboutme" className="aboutme">
        <h1 data-aos="fade-up" className="aboutme_title">About Me</h1>

        <div className="aboutme_text">
          <div data-aos="fade-down-right" className="aboutme_image"><img src={Deepak} className="profileimg" alt="Profile" loading="lazy" /></div>
          <p data-aos="fade-up" className="aboutme_description">Hello! I'm <span className="name"> Deepakkumar</span>, a freelance web developer specializing in creating modern, responsive, and user-friendly websites. Currently, I am in my final year at <b className="text-secondary"> Nandha Engineering College</b> <span className="text-secondary"> (Autonomous)</span>, where I focus on
            <span style={{ display: 'inline-block' }} className="word-rotate ps-2 ">
              <WordRotate

                words={['Freelancing.', 'Web Developement.', 'ChatBot Development.', "AI."]}
              /> </span> <br /> <br /> I have a growing expertise in MERN, which equips me to deliver cutting-edge web solutions tailored to business needs. My design philosophy emphasizes clean and minimalist aesthetics, ensuring every element serves a purpose.</p>
        </div>
      </div>






      <div id="skills" className="skills_tools" style={{ backgroundImage: `url(${skillbackground})` }}>
        <h1 data-aos="fade-up" className="aboutme_title pt-5">Skills & Tools</h1>

        <div className="scrollskillboxes">

          <div data-aos="fade-up" className="skillboxes">

            {skill.map((skill) => (
              <div data-aos="flip-right" data-aos-delay={`${skill.Id + 1}00`} key={skill.Id} className="box">
                <div className="box_title text-center">{skill.heading}</div>
                {skill.skills.map((skills) => (
                  <div key={skills.Id} className="skillbox_content container d-flex align-items-center gap-2 ">
                    <img src={skills.image} className="skillimg" alt="tech" loading="lazy" />
                    <div className="progress bg-secondary w-100 border" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                      <div className={`progress-bar fw-bold   progress-bar-striped  ${skills.percentage < 100 ? 'progress-bar-animated text-dark' : ''}`} style={{ width: `${skills.percentage}%`, backgroundColor: `${skills.percentage > 70 ? 'green' : skills.percentage > 40 ? 'orange' : 'red'}` }}>{skills.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}

          </div>

        </div>

      </div>


      <div id="projects" className="projects mt-lg-4 mt-5">
        <h1 data-aos="fade-up" className="aboutme_title text-center">Projects</h1>


        <div className="specificproject rounded d-flex mt-lg-5 justify-content-around flex-wrap">
          {projects.map((project) => (
            <div data-aos="flip-right" data-aos-delay={`${project.Id}00`} key={project.Id} className="project_card d-flex flex-column gap-2">


              <div data-aos="zoom-in" data-aos-delay={`${project.Id}00`} className="project_img_corousel  text-center">

                <div key={project.Id} ref={sliderRef} className="carousel-inner keen-slider d-flex justyfy-content-center align-items-center rounded">
                  {project.projectimg1.map((images, index) => (
                    <div key={index} className=" keen-slider__slide  bg-dark rounded  text-dark text-center">
                      <img src={images} alt="Project images" loading="lazy" />
                    </div>
                  ))}
                </div>


              </div>
              <div data-aos="zoom-in" data-aos-delay={`${project.Id}00`} className="project_heading d-flex justify-content-between align-items-center">
                <div className="project_heading_title">{project.projecttitle}</div>
                <a href={project.projectlink}> <button className="project_heading_link">view project</button></a>
              </div>
              <div data-aos="zoom-in" data-aos-delay={`${project.Id}00`} className="project_content">
                <ReadMoreArea lettersLimit={85} buttonStyle={buttonStyle}  > {project.projectcontent}</ReadMoreArea>
              </div>
              <div data-aos="" data-aos-delay={`${project.Id}00`} className="project_tools d-flex flex-wrap ">
                {project.projecttech.map((tech, index) => (
                  <span data-aos="fade-up" data-aos-delay={`${index}00`} key={index} className="">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <br /> <br />
        <Footer />

      </div>

















      {/* <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-3 bg-background md:shadow-xl">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Border Beam
        </span>
        <BorderBeam size={250} duration={12} delay={1} />
      </div> */}
    </>

  );
}

export default Aboutme;


