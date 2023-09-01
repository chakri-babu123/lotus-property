import { useNavigate } from 'react-router-dom';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css'

function ContactInner() {
  const form = useRef();
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();
      

    navigate("/thanqpage")

    emailjs.sendForm('service_ywdssxa', 'template_k8mynxg', form.current, 'oQKIlw45ZqW56Z2bi')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };         


                              
  return (
    <>
     <section id="contact" className="contact">
    <div className="container" data-aos="fade-up" data-aos-delay="100">

      <div className="row gy-4">
        <div className="col-lg-6">
          <div className="info-item  d-flex flex-column justify-content-center align-items-center">
            <i className="bi bi-map"></i>
            <h3>Our Address</h3>
            <p>Hyderbad, street 7-10</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="info-item d-flex flex-column justify-content-center align-items-center">
            <i className="bi bi-envelope"></i>
            <h3>Email Us</h3>
            <p>info@example.com</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="info-item  d-flex flex-column justify-content-center align-items-center">
            <i className="bi bi-telephone"></i>
            <h3>Call Us</h3>
            <p>+91 987654321</p>
          </div>
        </div>

      </div>

      <div className="row gy-4 mt-1">

        <div className="col-lg-12">
          <form action=""  ref={form} onSubmit={sendEmail}  className="php-email-form">
            <div className="row gy-4">
              <div className="col-lg-6 form-group">
                <input type="text" name="user_name" className="form-control" id="name" placeholder="Your Name" required/>
              </div>
              <div className="col-lg-6 form-group">
                <input type="email" className="form-control" name="user_email" id="email" placeholder="Your Email" required />
              </div>
           </div>
            <div className="row gy-4">
              <div className="col-lg-6 form-group">
                <input type="number" name="user_number" className="form-control" id="number" placeholder="Your Number" required  />
              </div>
              <div className="col-lg-6 form-group">
                <input type="text" className="form-control" name="user_city" id="city" placeholder="Your City" required/>
              </div>
              <div className="col-md-12">
                    <textarea className="form-control" name="user_msg" rows="6" placeholder="Message" required></textarea>
                  </div>
             </div>
              
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit"   >Send Message</button></div>
         
          
          </form>
        </div>

        <div className="col-lg-12 ">
          <iframe style={{width:"100%", height:"50vh"}}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            frameborder="0"  allowfullscreen></iframe>
        </div>
        </div>
     

    
    </div>
  </section>

  
  
    </>
  );
}

export default ContactInner;
