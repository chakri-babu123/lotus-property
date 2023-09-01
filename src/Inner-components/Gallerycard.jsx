
import React from 'react';
import '../App.css';

function Gallerycard(props) {
  return (
    <>
   <div class="col-lg-4 col-md-6 portfolio-item filter-remodeling">
<div class="portfolio-content h-100">
  <img src={props.Gimgsrc} class="img-fluid" alt=""/>
  <div class="portfolio-info">
    
    <p>{props.tittle}</p>
    <a href={props.Gimgsrc} title="Remodeling 1"
      data-gallery="portfolio-gallery-remodeling" class="glightbox preview-link"><i
        class="bi bi-zoom-in"></i></a>
  
  </div>
</div>
</div>
    </>
  );
}

export default Gallerycard;


