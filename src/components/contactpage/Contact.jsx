import { React, useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import './Contact.css'
import Headroom from "react-headroom";

import WordRotate from "@/components/magicui/word-rotate";
import AnimateEmail from "/src/images/Animatedemail.gif"
import AnimateWhatsapp from "/src/images/Animatedwhatsapp.gif"
import Animatelocation from "/src/images/Animatelocation.gif"
import locationimage from "/src/images/locationimage.avif"
import confetti from "canvas-confetti"
import { H1 } from 'tabler-icons-react';

function Contact() {

  const confettibtn1 = () => {
    confetti({
      particleCount: 3,
      spread: 1000,
      scalar: 1
    })
  }

  useEffect(() => {
    // Set the redirect value to the current URL
    document.getElementById('redirect-url').value = window.location.href;
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // You can add your form submission logic here (e.g., API call)
    // For this example, we'll just simulate a successful submission

    alert('Form submitted successfully!'); // Show alert message


};



  return (
    <div>

      <Headroom>
        <Navbar />
      </Headroom>

      <div className="contactintro">
        "Let's build something incredible together." <br />

        "Looking for a Freelancer for your project? Let's talk!" <br />

        "Need help with         <div style={{ display: 'inline-block' }} className="lookingfor px-3 ">
          <WordRotate
            words={['Freelancer', 'Web Developer', 'ChatBot Developer', 'Designer',]}
          /> </div>? I'm your guy." <br />

        "I'm open to freelance projects for startups and growing businesses."
      </div>

      <form  id='formm' className='needs-validation' action="https://api.web3forms.com/submit" method="POST" novalidate>
        <input type="hidden" name="access_key" value="bf09f79e-4888-4ddb-af54-5b31e0dc1fe4" />
        <h1 className='Enquirytitle'>Enquiry</h1>

        <div className="input">
          <input type="text" name='FirstName:' className="form-control" placeholder="First name" required />
        </div>
        <div className="input">
          <input type="text" name='LastName: ' className="form-control " placeholder="Last name" />
        </div>
        <div className="input">
          <input type="email" name='Email:' className="form-control" placeholder="Email" aria-label="First name" required />
        </div>
        <div className="input">
          <input className="form-control" name='Country:' list="countrylist" id="exampleDataList" placeholder="Country" required />
          <datalist id="countrylist">
            <option value="India" />
            <option value="United States" />
            <option value="United Kingdom" />
            <option value="Brazil" />
            <option value="Pakistan" />
            <option value="Ukraine" />
            <option value="Philippines" />
            <option value="India" />
            <option value="Bangladesh" />
            <option value="Russia" />
            <option value="Serbia" />
            <option value="Canada" />
            <option value="Australia" />
            <option value="Germany" />
            <option value="France" />
            <option value="Vietnam" />
            <option value="Poland" />
            <option value="South Africa" />
            <option value="Mexico" />
            <option value="Italy" />
            <option value="Spain" />
            <option value="Netherlands" />
          </datalist>

        </div>
        <div class="form-floating">
          <textarea className="form-control" name='Message:' placeholder="Leave a comment here" id="floatingTextarea2" style={{ minHeight: '100px', maxHeight: 'fit-content' }} required></textarea>
          <label for="floatingTextarea2">Message</label>
        </div>

        <input type="hidden" name="redirect" value="#" id='redirect-url'/>
        
        <div onClick={confettibtn1} className='submit d-flex justify-content-center'>
          <button  type="submit" className='btn btn-primary'>Submit Form</button>
        </div>

      </form>


      <div className="linksforcontact d-flex  flex-wrap-reverse align-items-center">
        <div className="address m-2">   <span> Erode <br /> Tamilnadu <br />India <br />638 314</span></div>
        <div className="message">
          <div className="email m-2"> <a href="mailto:forwebdeepak@gmail.com?subject=From Portfolio&body=Hi Deepakkumar,"> <img src={AnimateEmail} width={50} alt="" /> forwebdeepak@gmail.com </a></div>
          <div className="call m-2"> <a href="https://wa.me/+919025454148?text=Hello Deepak i got this number from your portfolio" target="_blank"> <img src={AnimateWhatsapp} width={50} alt="" /> +91 9025454148   </a></div>
        </div>
      </div>






      <Footer />
    </div >
  )
}

export default Contact
