import React from 'react';
import '../App.css';
import Gallerycard from './Gallerycard';
import Gdata from './Gdata';
function GalleryInner() {
  return (
    <>
   <section id="projects" class="projects">
    <div class="container" data-aos="fade-up">

      <div class="section-header">
        <h2>Our Gallery</h2>
        <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto
          accusamus fugit aut qui distinctio</p>
      </div>

      <div class="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry"
        data-portfolio-sort="original-order">

       

        <div class="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

        
        {
                Gdata.map((val, ind)=>{
                    return<Gallerycard
                    Gimgsrc={val.Gimgsrc}
                    tittle={val.tittle}
                    />
                })
               }
        

        </div>

      </div>

    </div>
  </section>
    </>
  );
}

export default GalleryInner;
