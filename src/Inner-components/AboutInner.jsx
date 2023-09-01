import React from 'react';
import '../App.css';
import abinbg from '../lotus-images/about-us.jpg'
function AboutInner() {
  return (
    <>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">

            <div className="row position-relative">

                <div className="col-lg-7 about-img" style={{backgroundImage:`URL(${abinbg})`}}></div>

                <div className="col-lg-7">
                   
                    <div className="our-story">
                        <h4>What We Do</h4>
                        <h3>Our Story</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ipsam at magni dolorem,
                            dolor eos pariatur temporibus deleniti in quas. Lorem ipsum dolor sit, amet consectetur
                           </p>
                        <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea
                                    commo</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit
                                    in</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea</span>
                            </li>
                        </ul>
                        <p>Vitae autem velit excepturi fugit. Animi ad non. Eligendi et non nesciunt suscipit
                            repellendus porro in
                            quo eveniet. Molestias in maxime doloremque.</p>

                       
                    </div>
                </div>

            </div>

        </div>
    </section>


    <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
  
          <div className="section-header">
            <h2>Our Mission</h2>
            <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos
              quam</p>
          </div>
  
          <div className="row gy-4">
  
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="service-item  position-relative">
                <div className="icon">
                    <i className="bi bi-bullseye"></i>
                </div>
                <h3>Our Mission</h3>
                <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis
                  tempore et consequatur.</p>
               
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="service-item position-relative">
                <div className="icon">
                    <i className="bi bi-eye-fill"></i>
                </div>
                <h3>Our Vission</h3>
                <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut
                  nesciunt dolorem.</p>
               
              </div>
            </div>
  
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="service-item position-relative">
                <div className="icon">
                    <i className="bi bi-gem"></i>
                </div>
                <h3>Our Values</h3>
                <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci
                  eos earum corrupti.</p>
               
              </div>
            </div>
  
         
  
          
  
          </div>
  
        </div>
      </section>




      <section id="stats-counter" className="stats-counter section-bg">
    <div className="container">

      <div className="row gy-4">

        <div className="col-lg-4 col-md-6">
          <div className="stats-item d-flex align-items-center w-100 h-100">
            <i className="bi bi-emoji-smile color-blue flex-shrink-0"></i>
            <div>
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                className="purecounter"></span>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="stats-item d-flex align-items-center w-100 h-100">
            <i className="bi bi-journal-richtext color-orange flex-shrink-0"></i>
            <div>
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1"
                className="purecounter"></span>
              <p>Properties</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="stats-item d-flex align-items-center w-100 h-100">
            <i className="bi bi-headset color-green flex-shrink-0"></i>
            <div>
              <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1"
                className="purecounter"></span>
              <p>Hours Of Support</p>
            </div>
          </div>
        </div>

      

      </div>

    </div>
  </section>
    </>
  );
}

export default AboutInner;
