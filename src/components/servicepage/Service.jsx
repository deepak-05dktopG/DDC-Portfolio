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
        { Id: 1, title: "Business Websites", content: "Designed to showcase products and services, these sites help companies attract new customers and partners by providing essential information about their offerings." },
        { Id: 2, title: "Portfolio Websites", content: " Used by creatives to display their work, these sites highlight skills and projects, serving as a digital resume for artists, designers, photographers, and other professionals." },
        { Id: 3, title: "E-commerce Website", content: "Building online stores with features like product catalogs, shopping carts, secure checkout processes, and payment gateway integration. This includes developing custom e-commerce platforms or using existing tools." },
        { Id: 4, title: "Blog Websites", content: "Focused on content creation, blogs allow individuals or organizations to share insights, stories, or expertise on various topics, often encouraging reader engagement through comments." },

      ]
    },
    {
      Id: 2,
      domain: "Chat bot Development",
      categories: [
        { Id: 1, title: "Website Chatbots", content: "These are integrated directly into websites to assist visitors in real-time. They can answer FAQs, guide users through the site, and help with customer service inquiries. Tools like Landbot and ChatBot allow for easy deployment without coding." },
        { Id: 2, title: "WhatsApp Chatbots", content: "Designed to interact with users via WhatsApp, these chatbots can handle customer support, send updates, and facilitate transactions. They leverage WhatsApp's API for seamless communication with users on this popular messaging platform." },
        { Id: 3, title: "AI-Powered Chatbots", content: "Utilizing natural language processing (NLP), these chatbots can understand user intent and provide personalized responses across platforms like websites and messaging apps. They improve over time through machine learning." },
        { Id: 4, title: "Rule-Based Chatbots", content: "These bots follow predefined scripts and respond to specific user inputs with set answers. They are simpler but effective for straightforward queries on websites or messaging platforms." },
        { Id: 5, title: "Hybrid Chatbots", content: "Combining rule-based logic with AI capabilities, hybrid chatbots can handle a wider range of inquiries and provide more dynamic interactions across websites and messaging services." },
        { Id: 6, title: "Telegram Chatbots", content: "Similar to WhatsApp bots, Telegram chatbots provide automated responses and services within the Telegram app. They can manage group interactions, deliver news updates, or assist with customer inquiries using Telegram's Bot API." }
      ]
    },
    {
      Id: 3,
      domain: "Graphic Design",
      categories: [
        { Id: 1, title: "Logo Design", content: "Create unique and memorable logos that encapsulate a brand's identity and values, helping businesses stand out." },
        { Id: 2, title: "Brand Identity Design", content: "Develop comprehensive branding packages that include logos, color palettes, typography, and style guides to ensure consistency across all visual elements." },
        { Id: 3, title: "Website Design/UI/UX Design", content: "Design visually appealing and user-friendly websites that enhance user experience while effectively communicating the brand's message." },
        { Id: 4, title: "Print Design", content: "Produce materials such as brochures, flyers, business cards, and posters that help businesses promote their products and services in physical formats." },
        { Id: 5, title: "Packaging Design", content: "Design product packaging that is visually appealing and functional, ensuring it aligns with the brand's identity while attracting consumers." },
      ]
    }
  ]


  return (
    <div className=' services'>
      <Headroom>
        <Navbar />
      </Headroom>

      <div className="container whatido">
        <h1 data-aos="fade-right" className='heading'>What I Do</h1>
        <div className='first d-flex flex-wrap-reverse  align-items-center'>
          <div data-aos="zoom-in" className="content">I offer professional web development services to individuals and businesses looking to establish or enhance their online presence. Whether you need a sleek portfolio, an engaging business website, or seamless web applications, I’m here to help bring your vision to life.
            <br />
            <div data-aos="fade-left" data-aos-delay="200" className='d-flex flex-column'>
              <a className='z-2' href="#1">Web Development</a>
              <a className='z-2' href="#2">ChatBot Development</a>
              <a className='z-2' href="#3">Graphic Design</a>
            </div>

          </div>
          <div data-aos="zoom-out" className="serviceimage ">
            <img src={Serviceimage} className='bg-danger' alt="Service" loading="lazy" />
          </div>
        </div>

      </div>


      <section data-aos="fade-down" className='w-100 pb-3 fw-bold'>
        <ParallaxText baseVelocity={-3}>Website and ChatBot Development </ParallaxText>
        <ParallaxText baseVelocity={3}>Website and ChatBot Development </ParallaxText>
      </section>




      <div  className="servicelist d-flex flex-column gap-5  container">

        {services.map((services) => (
          <div data-aos="fade-down-right" className='div  rounded'>
            <h1 data-aos="fade-left" key={services.Id} id={services.Id}
              className='heading '>{services.domain}</h1>
            <div className='specificdomain d-flex flex-wrap'>

              {services.categories.map(categories => (
                <>

                  {/* <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Accordion Item #1
                        </button>
                      </h2>

                      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div> */}




                  <div data-aos="zoom-in" key={categories.Id} id="accordionExample" className="accordion subservices ">
                    <div class="accordion-item ">
                      <h2 class="accordion-header w-100">
                        <button className="h1 accordion-button subservice" type='button' data-bs-toggle="collapse" data-bs-target={`#collapseOne${categories.Id + services.Id}`} aria-expanded="true" aria-controls="collapseOne">{categories.title}</button>
                      </h2>

                      <div id={`collapseOne${categories.Id +services.Id}`} class="accordion-collapse  collapse " data-bs-parent="#accordionExample">
                        <div className="subservicecontent accordion-body">{categories.content}</div>
                      </div>
                    </div>
                  </div>
                </>
              ))}


            </div >
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
