import React, { useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import { use } from 'react'
import Footer from '../footer/Footer'
import './Service.css'
import Headroom from "react-headroom";
import Serviceimage from "/src/images/FreelanceService.jpg"
import { Id } from 'tabler-icons-react'
import { motion, useScroll, useSpring } from "framer-motion";
import ParallaxText from './VelocityScroll'
function Service() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });




  const services = [
    {
      Id: 1,
      domain: "Web Development",
      categories: [
        { Id: 1, title: "Portfolio", content: "i am deepak i am doing web development " },
        { Id: 2, title: "Portfolio", content: "i am deepak i am doing web development " }
      ]
    },
    {
      Id: 2,
      domain: "Chat bot Development",
      categories: [
        { Id: 1, title: "Portfolio", content: "i am deepak i am doing web development " },
        { Id: 2, title: "Portfolio", content: "i am deepak i am doing web development " },
        { Id: 2, title: "Portfolio", content: "i am deepak i am doing web development " },
        { Id: 2, title: "Portfolio", content: "i am deepak i am doing web development " },
        { Id: 2, title: "Portfolio", content: "i am deepak i am doing web development " }

      ]
    }
  ]


  return (
    <div className=' services'>
      <Headroom>
        <Navbar />
      </Headroom>

      <div className="container whatido">
        <h1 className='heading'>What I Do</h1>
        <div className='first d-flex flex-wrap-reverse  align-items-center'>
          <div className="content">I offer professional web development services to individuals and businesses looking to establish or enhance their online presence. Whether you need a sleek portfolio, an engaging business website, or seamless web applications, I’m here to help bring your vision to life.</div>
          <div className="serviceimage ">
            <img src={Serviceimage} className='bg-danger' alt="Service" loading="lazy"/>
          </div>
        </div>
      </div>

      <section className='w-100 pb-3 fw-bold'>
        <ParallaxText baseVelocity={-3}>Website and ChatBot Development </ParallaxText>
        <ParallaxText baseVelocity={3}>Website and ChatBot Development </ParallaxText>
      </section>




      <div className="servicelist d-flex flex-column gap-5  container">

        {services.map((services) => (
          <div className='div rounded'>
            <h1 key={services.Id} className='heading '>{services.domain}</h1>
            <div className='specificdomain d-flex flex-wrap'>

              {services.categories.map(categories => (
                <div key={categories.Id} className="subservices">
                  <h1 className="subservice">{categories.title}</h1>
                  <div className="subservicecontent">{categories.content}</div>
                </div>
              ))}


            </div>
          </div>
        ))}


      </div>







      <div className='mt-3'>
        <Footer />
      </div>
    </div>
  )
}

export default Service;
