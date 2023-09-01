import React from 'react';
import '../App.css';

function Proeprtydetailinner(props) {
  return (
    <>
   <section id="project-details" className="project-details">
      
      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="position-relative h-100">
          <div className=" portfolio-details-slider ">
            <div className=" align-items-center">

             <div className="row">
              <div className="col-lg-6">
                <img src={props.pdimgsrc} alt=""/>
              </div>
              <div className="col-lg-6">
                <div className="portfolio-description">
                  <h2>{props.tittle}</h2>
                  <p> <i className="bi bi-map mx-2"></i> Hyderabad , Street 7-10</p>
                  <h4>Description</h4>
                  <p>
                  {props.desc}
                  </p>
                  
    
                 
                </div>
              </div>
             </div>
           
            </div>
            
          </div>
         
        </div>
       

      </div>
    </section>




   
 
    </>
  );
}

export default Proeprtydetailinner;