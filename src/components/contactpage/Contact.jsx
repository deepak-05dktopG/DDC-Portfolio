import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import './Contact.css'
import WordRotate from "@/components/magicui/word-rotate";
import AnimateEmail from "/src/images/Animatedemail.gif"
import AnimateWhatsapp from "/src/images/Animatedwhatsapp.gif"
import Animatelocation from "/src/images/Animatelocation.gif"
import locationimage from "/src/images/locationimage.avif"
function Contact() {
  return (
    <div>
      <Navbar />

      <div className="contactintro">
        "Let's build something incredible together." <br />

        "Looking for a Freelancer for your project? Let's talk!" <br />

        "Need help with         <div style={{ display: 'inline-block' }} className="lookingfor px-3 ">
          <WordRotate
            words={['Freelancer', 'Web Developer', 'ChatBot Developer', 'Designer',]}
          /> </div>? I'm your guy." <br />

        "I'm open to freelance projects for startups and growing businesses."
      </div>

      <div className="form">
      </div>

      <div className="linksforcontact d-flex  flex-wrap-reverse align-items-center">
        <div className="address m-2">   <span> Erode <br /> Tamilnadu <br />India <br />638 314</span></div>
        <div className="message">
          <div className="email m-2"> <a  href="mailto:forwebdeepak@gmail.com?subject=From Portfolio&body=Hi Deepakkumar,"> <img src={AnimateEmail} width={50} alt=""/> forwebdeepak@gmail.com </a></div>
          <div className="call m-2"> <a  href="https://wa.me/+919025454148?text=Hello Deepak i got this number from your portfolio" target="_blank"> <img src={AnimateWhatsapp} width={50} alt="" /> +91 9025454148   </a></div>
        </div>
      </div>






      <Footer />
    </div >
  )
}

export default Contact
