import React from 'react';
import '../App.css';
import Breadscrum from '../Inner-components/Breadscrum';
import bg8 from '../lotus-images/property-detail-baner.jpg'
import Propertyinner from '../Inner-components/Propertydetailinner';
import hd1 from '../lotus-images/header-bg-7.jpg'
import icn1 from '../lotus-images/icons/highway (1).png'
import icn2 from '../lotus-images/icons/compass.png'
import icn3 from '../lotus-images/icons/secure.png'
import icn4 from '../lotus-images/icons/playground.png'
import icn5 from '../lotus-images/icons/street-light.png'
import icn6 from '../lotus-images/icons/firewall.png'
import layout1 from '../lotus-images/ploat-map.jpg'
import plimg from '../lotus-images/ploat-road.jpg'
function Propertydetail() {
  return (
    <>
      <Breadscrum tittle='Property Details' btnname='Home' visit='/' btn2name='Property Details' bgimg1={bg8} />
      <Propertyinner tittle='Sun Valley' pdimgsrc={hd1} desc='  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia.
                    Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia
                    accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt
                    eius.
    
                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia.
                    Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia
                    accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt
                    eius.' />


<div className="container-xxl py-5">
        <div className="container">
          <div className="section-header">
            <h2>Property Features</h2>
            <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos
              quam</p>
          </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-2-item position-relative h-100">
                        <div className="service-2-text rounded p-5">
                            <div className="mx-auto mb-4"
                                >
                                <img className="img-fluid" src={icn1} width={'100px'} alt="Icon"/>
                            </div>
                            <h4 className="mb-3">60' & 30 FEET ROADS</h4>
                               
                        </div>
                      
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-2-item position-relative h-100">
                        <div className="service-2-text rounded p-5">
                            <div className="mx-auto mb-4"
                                >
                                <img className="img-fluid" src={icn2} width={'100px'} alt="Icon"/>
                            </div>
                            <h4 className="mb-3">100% VASTHU</h4>
                               
                        </div>
                      
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-2-item position-relative h-100">
                        <div className="service-2-text rounded p-5">
                            <div className="mx-auto mb-4"
                                >
                                <img className="img-fluid" src={icn3} width={'100px'} alt="Icon"/>
                            </div>
                            <h4 className="mb-3">24/7 SECURITY</h4>
                                
                        </div>
                      
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-2-item position-relative h-100">
                        <div className="service-2-text rounded p-5">
                            <div className="mx-auto mb-4"
                                >
                                <img className="img-fluid" src={icn4} width={'100px'} alt="Icon"/>
                            </div>
                            <h4 className="mb-3">Play Ground</h4>
                               
                        </div>
                      
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-2-item position-relative h-100">
                        <div className="service-2-text rounded p-5">
                            <div className=" mx-auto mb-4"
                                >
                                <img className="img-fluid" src={icn5} width={'100px'} alt="Icon"/>
                            </div>
                            <h4 className="mb-3">STREET LIGHTS</h4>
                                
                        </div>
                      
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-2-item position-relative h-100">
                        <div className="service-2-text rounded p-5">
                            <div className=" mx-auto mb-4"
                                >
                                <img className="img-fluid" src={icn6} width={'100px'} alt="Icon"/>
                            </div>
                            <h4 className="mb-3">COMPOUND WALL</h4>
                               
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section>
    <div className="container">
      <div className="row">
        <div className="section-header">
          <h2>Layout Plan</h2>
          
        </div>
        <div className="col-lg-12">
          <img src={layout1} width="100%" alt=""/>
        </div>
      </div>
    </div>
  </section>
  <section id="alt-services" class="alt-services">
  <div class="container" data-aos="fade-up">
      <div class="section-header">
          <h2>Location Highlights</h2>
         
        </div>
    <div class="row justify-content-around gy-4">
      <div class="col-lg-6 img-bg" style={{backgroundImage: `URL(${plimg})`}} data-aos="zoom-in"
        data-aos-delay="100"></div>

      <div class="col-lg-5 d-flex flex-column justify-content-center">
       

        <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
          <i class="bi bi-star-fill flex-shrink-0"></i>
          <div>
            <h4 class="stretched-link">Mumbhai Highway,</h4>
            <h4 class="stretched-link">MNR Medical College.</h4>
          </div>
        </div>

        <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
          <i class="bi bi-star-fill flex-shrink-0"></i>
          <div>
            <h4 class="stretched-link">Mumbhai Highway,</h4>
            <h4 class="stretched-link">MNR Medical College.</h4>
          </div>
        </div>

        <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
          <i class="bi bi-star-fill flex-shrink-0"></i>
          <div>
            <h4 class="stretched-link">Mumbhai Highway,</h4>
            <h4 class="stretched-link">MNR Medical College.</h4>
          </div>
        </div>

        <div class="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
          <i class="bi bi-star-fill flex-shrink-0"></i>
          <div>
            <h4 class="stretched-link">Mumbhai Highway,</h4>
            <h4 class="stretched-link">MNR Medical College.</h4>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>

  <section id="get-started" className="get-started section-bg section-bg-2">
    <div className="container">
     
      <div className="row justify-content-between gy-4">

        <div className="col-lg-6 d-flex align-items-center" data-aos="fade-up">
          <div className="content">
            <h3>Frequently Asked Questions</h3>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Why should i choose 
                    Loutus Property
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                   
                    
                    Loutus Property Group is the best company to buy plots in Hyderabad.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Vaasthu?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                   
                    100% vasthu
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                   How many property have Lotus Property
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                   We have four property
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <div className="col-lg-6" data-aos="fade">
          <div className="content">
            <h3>Enquery Form</h3>
            <form action="https://formspree.io/f/mdovyzkb" method="post" className="php-email-form" style={{height:'250px'}}>
           
              <div className="row gy-3">
  
                <div className="col-md-12">
                  <input type="text" name="name" className="form-control" placeholder="Name" required />
                </div>
  
                
                <div className="col-md-12">
                  <input type="text" className="form-control" name="phone" placeholder="Phone" required />
                </div>
  
            
  
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your quote request has been sent successfully. Thank you!</div>
  
                  <button type="submit">SEND</button>
                </div>
  
              </div>
            </form>
          </div>
        
        </div>

      </div>

    </div>
  </section>
    </>
  );
}

export default Propertydetail;