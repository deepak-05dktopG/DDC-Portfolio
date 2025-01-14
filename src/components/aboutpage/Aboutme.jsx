
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
import { BorderBeam } from "@/components/magicui/border-beam";
import ScrollProgress from "@/components/magicui/scroll-progress";
import WordRotate from "@/components/magicui/word-rotate";
// import TextReveal from '@/components/ui/text-reveal';



// import images
import Deepak from '/src/images/deepak.jpg'
import DeepakLandscape from '/src/images/deepaklandscap.jpg'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
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
        { Id: 1, image: "#", tooltip: "this is html", percentage: 98 },
        { Id: 2, image: "#", tooltip: "this is css", percentage: 95 },
        { Id: 3, image: "#", tooltip: "this is javascript", percentage: 90 }]
    },
    {
      Id: 2,
      heading: 'Frameworks & Libraries', skills: [
        { Id: 1, image: "#", tooltip: "this is Reactjs", percentage: 85 },
        { Id: 2, image: "#", tooltip: "this is Bootstrap", percentage: 90 },
        { Id: 3, image: "#", tooltip: "this is Framermotion", percentage: 85 },
        { Id: 4, image: "#", tooltip: "this is Gsap", percentage: 50 }]
    },
    {
      Id: 3,
      heading: 'Tools', skills: [
        { Id: 1, image: "#", tooltip: "this is Figma", percentage: 85 },
        { Id: 2, image: "#", tooltip: "this is Git", percentage: 90 },
        { Id: 3, image: "#", tooltip: "this is Github", percentage: 90 },
      ]
    },
    {
      Id: 4,
      heading: 'Backend', skills: [
        { Id: 1, image: "#", tooltip: "this is Nodejs", percentage: 85 },
        { Id: 2, image: "#", tooltip: "this is Expressjs", percentage: 90 },
        { Id: 3, image: "#", tooltip: "this is Python", percentage: 0 },
        { Id: 4, image: "#", tooltip: "this is Java", percentage: 0 }]
    },
    {
      Id: 5,
      heading: 'DataBase', skills: [
        { Id: 1, image: "#", tooltip: "this is SQL", percentage: 0 },
        { Id: 2, image: "#", tooltip: "this is MongoDB", percentage: 10 },
      ]
    },




  ]
  const projects = [
    {
      Id: 1,
      projectimg1: ["src/images/deepak.jpg", "src/images/deepak.jpg", "src/images/deepak.jpg", "src/images/deepak.jpg"],
      projecttitle: "portfolio",
      projectlink: "https://deepakdigitalcraft.tech/",
      projectcontent: "Deepak so many contents one of the most importna perisn the world almsot comme  int he wpr dwhinlihe happy and wealthy",
      projecttech: ["React", "Node", "MongoDB", "framer motion", "Bootstrap5"],
    },
    {
      Id: 2,
      projectimg1: ["src/images/deepak.jpg", "src/images/deepak.jpg", "src/images/deepak.jpg", "src/images/deepak.jpg"],
      projecttitle: "portfolio",
      projectlink: "https://deepakdigitalcraft.tech/",
      projectcontent: "Deepak so many contents one of the most importna perisn the world almsot comme  int he wpr dwhinlihe happy and wealthy",
      projecttech: ["React", "Node", "MongoDB", "framer motion", "Bootstrap5"],
    },
    {
      Id: 3,
      projectimg1: ["src/images/deepak.jpg", "src/images/deepak.jpg", "src/images/deepak.jpg", "src/images/deepak.jpg"],
      projecttitle: "portfolio",
      projectlink: "https://deepakdigitalcraft.tech/",
      projectcontent: "Deepak so many contents one of the most importna perisn the world almsot comme  int he wpr dwhinlihe happy and wealthy",
      projecttech: ["React", "Node", "MongoDB", "framer motion", "Bootstrap5"],
    },
    {
      Id: 4,
      projectimg1: ["src/images/deepak.jpg", "src/images/deepak.jpg", "src/images/deepak.jpg", "src/images/deepak.jpg"],
      projecttitle: "portfolio",
      projectlink: "https://deepakdigitalcraft.tech/",
      projectcontent: "Deepak so many contents one of the most importna perisn the world almsot comme  int he wpr dwhinlihe happy and wealthy",
      projecttech: ["React", "Node", "MongoDB", "framer motion", "Bootstrap5"],
    }

  ]




  return (
    <>


      <motion.div className="z-2 progress-bar" style={{ scaleX }} ></motion.div>

      <Headroom>
        <Navbar />
      </Headroom>




      <div div className="Hero d-flex flex-column justify-content-center">
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






          <div className="button">

           <a href="src/images/DeepakkumarResume.pdf" download> <AwesomeButton type="secondary" className="mt-2">Resume
              <span className=""><Download size={25} strokeWidth={2} color={'black'} /></span>
            </AwesomeButton></a></div>
          <div className="Hero_Social_Medias">
            <a href="https://www.linkedin.com/in/deepak-05dktopg/" className=""><AwesomeButton type="danger"><BrandLinkedin size={35} className="button" strokeWidth={2} color={'black'} />Linkedin</AwesomeButton></a>
            <a href="https://github.com/deepak-05dktopG/"> <AwesomeButton type="danger"> <BrandGithub size={35} strokeWidth={2} color={'black'} />Github </AwesomeButton></a>
            <a href="https://www.instagram.com/prime_dk_05/"> <AwesomeButton type="danger"><BrandInstagram size={35} strokeWidth={2} color={'black'} />Instgram</AwesomeButton></a>
          </div>

        </div>



      </div >


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




      <div className="skills_tools">
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
                      <div className={`progress-bar text-dark fw-bold  progress-bar-striped  ${skills.percentage < 100 ? 'progress-bar-animated' : ''}`} style={{ width: `${skills.percentage}%`, backgroundColor: `${skills.percentage > 70 ? 'green' : skills.percentage > 40 ? 'yellow' : 'red'}` }}>{skills.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}

          </div>

        </div>



      </div>


      <div className="projects ">
        <h1 className="aboutme_title text-center">Projects</h1>


        <div className="d-flex mt-5 justify-content-around flex-wrap">
          {projects.map((project) => (
            <div key={project.Id} className="project_card d-flex flex-column gap-2">


              <div className="project_img_corousel text-center">

                <div id={`carouselExampleInterval${project.Id}`} class="carousel slide" data-bs-ride="true">
                  <div class="carousel-inner">

                    {project.projectimg1.map((projectimage, index) => (
                      <>
                        <div className="carousel-item active" data-bs-interval="3000">
                          <img src={projectimage} class="d-block" alt={`Slide ${index + 1}`} />
                        </div>
                      </>
                    ))}
                  </div>
                  <button key={project.Id} class="carousel-control-prev" type="button" data-bs-target={`#carouselExampleInterval${project.Id}`} data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button key={project.Id} class="carousel-control-next" type="button" data-bs-target={`#carouselExampleInterval${project.Id}`} data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
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
    </>

  );
}

export default Aboutme;


