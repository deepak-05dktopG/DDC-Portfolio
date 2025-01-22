import React from 'react'
import "./Footer.css"
import { Linkedin, Mail, Github, Instagram, ChevronsUp } from 'lucide-react';
import { Link,useLocation } from 'react-router-dom';

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (

        <>
            <div onClick={scrollToTop} className='scrolltop text-secondary text-end p-2'>    <ChevronsUp size={40} /></div>
            <div className='Footer d-flex flex-column justify-content-around'>
                <h2 className="footer_title">Let’s Work Together!  </h2>
                <div className="footer_content">Whether you're a small business, startup, or individual looking to build a website, I’m excited to collaborate and create something amazing. Together, we can craft a web presence that stands out and delivers results. <Link to="/contact" >Contact</Link>  </div>
                <div className="cta d-flex justify-content-center ">
                    <div><a href='https://www.linkedin.com/in/deepak-05dktopg/'><Linkedin style={{ width: "fit-content", height: "50px" }} /></a></div>
                    <div><a href="mailto:forwebdeepak@gmail.com?subject=Hello From Portfolio"><Mail style={{ width: "fit-content", height: "50px" }} /></a></div>
                    <div><a href='https://github.com/deepak-05dktopG/'><Github style={{ width: "fit-content", height: "50px" }} /></a></div>
                    <div><a href='https://www.instagram.com/prime_dk_05/'><Instagram style={{ width: "fit-content", height: "50px" }} /></a></div>
                </div>
                <center className="copyrights">© 2025 DDC Tech. All rights reserved.
                </center>
            </div>
        </>

    )
}

export default Footer
