
import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Typewriter from 'typewriter-effect';
import { AwesomeButton } from "react-awesome-button";
import { Download, BrandLinkedin, BrandGithub, BrandInstagram } from 'tabler-icons-react';
import './about.css';
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
import Deepak from '/src/images/deepak.jpg'
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
import RINGS from 'vanta/dist/vanta.rings.min';

import NodeLogo from "/src/images/NodeJs.jpeg"
import Expresslogo from "/src/images/ExpressJs.jpeg"
import Pythonlogo from "/src/images/Python.png"
import javalogo from "/src/images/Java.png"
import sqllogo from "/src/images/Sql.png"
import mongodblogo from "/src/images/MongoDB.jpeg"
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
        { Id: 1, image: `${NodeLogo}`, tooltip: "this is Nodejs", percentage: 65 },
        { Id: 2, image: `${Expresslogo}`, tooltip: "this is Expressjs", percentage: 60 },
        { Id: 3, image: `${Pythonlogo}`, tooltip: "this is Python", percentage: 0 },
        { Id: 4, image: `${javalogo}`, tooltip: "this is Java", percentage: 0 }]
    },
    {
      Id: 5,
      heading: 'DataBase', skills: [
        { Id: 1, image: `${sqllogo}`, tooltip: "this is SQL", percentage: 0 },
        { Id: 2, image: `${mongodblogo}`, tooltip: "this is MongoDB", percentage: 10 },
      ]
    },




  ]
  const projects = [
    {
      Id: 1,
      projectimg1: [`${skillbackground}`, `${Deepak}`, `${skillbackground}`, `${skillbackground}`],
      projecttitle: "portfolio",
      projectlink: "https://deepakdigitalcraft.tech/",
      projectcontent: "Deepak so many contents one of the most importna perisn the world almsot comme  int he wpr dwhinlihe happy and wealthy",
      projecttech: ["React", "Node", "MongoDB", "framer motion", "Bootstrap5"],
    },
    {
      Id: 2,
      projectimg1: [`${skillbackground}`, `${skillbackground}`, `${skillbackground}`, `${skillbackground}`],
      projecttitle: "portfolio",
      projectlink: "https://deepakdigitalcraft.tech/",
      projectcontent: "Deepak so many contents one of the most importna perisn the world almsot comme  int he wpr dwhinlihe happy and wealthy",
      projecttech: ["React", "Node", "MongoDB", "framer motion", "Bootstrap5"],
    },
    {
      Id: 3,
      projectimg1: [`${skillbackground}`, `${skillbackground}`, `${skillbackground}`, `${skillbackground}`],
      projecttitle: "portfolio",
      projectlink: "https://deepakdigitalcraft.tech/",
      projectcontent: "Deepak so many contents one of the most importna perisn the world almsot comme  int he wpr dwhinlihe happy and wealthy",
      projecttech: ["React", "Node", "MongoDB", "framer motion", "Bootstrap5"],
    },
    {
      Id: 4,
      projectimg1: [`${skillbackground}`, `${skillbackground}`, `${skillbackground}`, `${skillbackground}`],
      projecttitle: "portfolio",
      projectlink: "https://deepakdigitalcraft.tech/",
      projectcontent: "Deepak so many contents one of the most importna perisn the world almsot comme  int he wpr dwhinlihe happy and wealthy",
      projecttech: ["React", "Node", "MongoDB", "framer motion", "Bootstrap5"],
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


  useEffect(() => {
    RINGS({
      el: "#vanta-clouds",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: .00,
      scaleMobile: 1.00,
      backgroundColor: '',
      color: 0xd60680,
    })
  }, [])




  return (
    <>


      <motion.div className="z-2 progress-bar" style={{ scaleX }} ></motion.div>

      <Headroom className="" >
        <Navbar />
      </Headroom>
      <div id="vanta-clouds" className="Hero d-flex flex-column justify-content-center">
        <div className="Hero_text">
          <div>Hey, there <span className="hi">👋</span></div>
          <div>I’m <span className="name"> Deepakkumar</span></div>
          <div className="d-flex align-items-center" >a <span className="roles"> <Typewriter
            options={{
              strings: ['Freelancer', 'Web Developer', 'Designer',],
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

          <div className="button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            <AwesomeButton type="secondary" className="mt-2">Resume
              <span className=""><Download size={25} strokeWidth={2} color={'black'} /></span>
            </AwesomeButton>
          </div>


          <div className="offcanvas  offcanvas-end w-100 " tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">

            <div class="offcanvas-body">
            </div>

            <div className="d-flex p-2 gap-2 bg-dark justify-content-end">
           <button className="btn btn-outline-danger" type="button" data-bs-dismiss="offcanvas" >Close</button>
             <button  className="btn  btn-outline-success"> <a href="./src/images/internresume.docx" download  className=" text-white" style={{padding:'10px',textDecoration:'none'}}> Download </a></button>
            </div>
          </div>





          <div className="Hero_Social_Medias">
            <a href="https://www.linkedin.com/in/deepak-05dktopg/" className=""><AwesomeButton type="danger"><BrandLinkedin size={35} className="button" strokeWidth={2} color={'black'} /> <span className="text-white"> Linkedin </span></AwesomeButton></a>
            <a href="https://github.com/deepak-05dktopG/"> <AwesomeButton type="danger"> <BrandGithub size={35} strokeWidth={2} color={'black'} /> <span className="text-white">Github </span> </AwesomeButton></a>
            <a href="https://www.instagram.com/prime_dk_05/"> <AwesomeButton type="danger"><BrandInstagram size={35} strokeWidth={2} color={'black'} /> <span className="text-white">Instgram</span> </AwesomeButton></a>
          </div>

        </div>



      </div>
      {/* <ShineBorder
        className="relative flex h-[500px] w-25 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <span className="pointer-events-none bg-white whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Shine Border
        </span>
      </ShineBorder> */}


      <div className="aboutme">
        <h1 className="aboutme_title">About Me</h1>

        <div className="aboutme_text">
          <div className="aboutme_image"><img src={Deepak} className="profileimg" alt="" /></div>
          <p className="aboutme_description">Hello! I'm <span className="name"> Deepakkumar</span>, a freelance web developer specializing in creating modern, responsive, and user-friendly websites. Currently, I am in my pre-final year at <b className="text-secondary"> Nandha Engineering College</b> <span className="text-secondary"> (Autonomous)</span>, where I focus on
            <span style={{ display: 'inline-block' }} className="word-rotate ps-2 ">
              <WordRotate

                words={['Freelancing.', 'Web Developement.', 'ChatBot Development.']}
              /> </span> <br /> <br /> I have a growing expertise in React.js, which equips me to deliver cutting-edge web solutions tailored to business needs. My design philosophy emphasizes clean and minimalist aesthetics, ensuring every element serves a purpose.</p>
        </div>
      </div>






      <div className="skills_tools" style={{ backgroundImage: `url(${skillbackground})` }}>
        <h1 className="aboutme_title pt-5">Skills & Tools</h1>

        <div className="scrollskillboxes">

          <div className="skillboxes">

            {skill.map((skill) => (

              <div key={skill.Id} className="box">
                <div className="box_title text-center">{skill.heading}</div>
                {skill.skills.map((skills) => (
                  <div key={skills.Id} className="skillbox_content container d-flex align-items-center gap-2 ">
                    <img src={skills.image} className="skillimg" alt="tech" />
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


      <div className="projects mt-lg-4 mt-5">
        <h1 className="aboutme_title text-center">Projects</h1>


        <div className="specificproject rounded d-flex mt-lg-5 justify-content-around flex-wrap">
          {projects.map((project) => (
            <div key={project.Id} className="project_card d-flex flex-column gap-2">


              <div className="project_img_corousel  text-center">

                <div key={project.Id} ref={sliderRef} className="carousel-inner keen-slider d-flex justyfy-content-center align-items-center rounded">
                  {project.projectimg1.map((images, index) => (
                    <div key={index} className=" keen-slider__slide  bg-dark rounded  text-dark text-center">
                      <img src={images} alt="" />
                    </div>
                  ))}
                </div>


              </div>
              <div className="project_heading d-flex justify-content-between align-items-center">
                <div className="project_heading_title">{project.projecttitle}</div>
                <a href={project.projectlink}> <button className="project_heading_link">view project</button></a>
              </div>
              <div className="project_content">
                <ReadMoreArea lettersLimit={85} buttonStyle={buttonStyle}  > {project.projectcontent}</ReadMoreArea>
              </div>
              <div className="project_tools d-flex flex-wrap ">
                {project.projecttech.map((tech, index) => (
                  <span key={index} className="">{tech}</span>
                ))}
              </div>
            </div>



          ))}
        </div>


      </div>











      {/* <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-3 bg-background md:shadow-xl">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Border Beam
        </span>
        <BorderBeam size={250} duration={12} delay={1} />
      </div> */}
      <Footer />
    </>

  );
}

export default Aboutme;


