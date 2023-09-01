import React from 'react';
import '../App.css';
import flogo from '../lotus-images/footer-logo.png'
import { NavLink } from 'react-router-dom';
function Footer() {
  return (
    <>
    <footer id="footer" className="footer">

<div className="footer-content position-relative">
  <div className="container">
    <div className="row">

      <div className="col-lg-4 col-md-4">
        <div className="footer-info">
          <h3><img src={flogo} width="150px"  alt=""/></h3>
         <p>Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Rem, nesciunt nostrum <br/>eligendi suscipit error possimus!</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-4 footer-links">
        <h4>QUICK LNIKS</h4>
        <ul>
          <li><NavLink to={'/'} >Home</NavLink></li>
          <li><NavLink to={'/about'}>About</NavLink></li>
          <li><NavLink to={'/property'}>Properties</NavLink></li>
          <li><NavLink to={'/gallery'}>Gallery</NavLink></li>
          <li><NavLink to={'/contact'}>Contact</NavLink></li>
        </ul>
      </div>

      <div className="col-lg-4 col-md-4 footer-links">
        <h4>ENQUIRE NOW</h4>
        <p>
          Hyderabad , Street<br/>507,<br/>
          <strong>Phone:</strong> +91 987654321<br/>
          <strong>Email:</strong> info@example.com<br/>
        </p>
        <div className="social-links d-flex mt-3">
          <NavLink to={"#"} className="d-flex align-items-center justify-content-center"><i className="bi bi-twitter"></i></NavLink>
          <NavLink to={"#"} className="d-flex align-items-center justify-content-center"><i className="bi bi-facebook"></i></NavLink>
          <NavLink to={"#"} className="d-flex align-items-center justify-content-center"><i className="bi bi-instagram"></i></NavLink>
          <NavLink to={"#"} className="d-flex align-items-center justify-content-center"><i className="bi bi-linkedin"></i></NavLink>
        </div>
      </div>

     

    </div>
  </div>
</div>

<div className="footer-legal text-center position-relative">
  <div className="container">
    <div className="copyright">
      &copy; Copyright All Rights Reserved || Designed & Developed by <NavLink to={"#"}>Epixel Web</NavLink> 
    </div>
    
     
      
   
  </div>
</div>

</footer>
    </>
  );
}

export default Footer;
