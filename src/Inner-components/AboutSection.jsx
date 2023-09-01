import React from 'react';
import '../App.css';
import aboutbg from '../lotus-images/about-img.jpg'
function AboutSection() {
  return (
    <>
 <section id="alt-services" className="alt-services">
    <div className="container" data-aos="fade-up">
        <div className="section-header">
            <h2>About Us</h2>
            <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos
              quam</p>
          </div>
      <div className="row justify-content-around gy-4">
        <div className="col-lg-6 img-bg" style={{backgroundImage: `URL(${aboutbg})`}} data-aos="zoom-in"
          data-aos-delay="100"></div>

        <div className="col-lg-5 d-flex flex-column justify-content-center">
          <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
          <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus
            laudantium. Soluta voluptate sed facere corporis dolores excepturi</p>

          <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
            <i className="bi bi-award-fill flex-shrink-0"></i>
            <div>
              <h4><a  className="stretched-link">Lorem Ipsum</a></h4>
              <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                non provident</p>
            </div>
          </div>

          <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
            <i className="bi bi-patch-check flex-shrink-0"></i>
            <div>
              <h4><a  className="stretched-link">Nemo Enim</a></h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque</p>
            </div>
          </div>

          <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
            <i className="bi bi-piggy-bank-fill flex-shrink-0"></i>
            <div>
              <h4><a  className="stretched-link">Dine Pad</a></h4>
              <p>Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus
                aut eligendi omnis</p>
            </div>
          </div>

          <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
            <i className="bi bi-house-fill flex-shrink-0"></i>
            <div>
              <h4><a  className="stretched-link">Tride clov</a></h4>
              <p>Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet.
                Et eligendi</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
    </>
  );
}

export default AboutSection;
