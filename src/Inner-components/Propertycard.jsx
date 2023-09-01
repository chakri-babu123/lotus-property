import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

function Proeprtycard(props) {
  return (
    <>
    <div className="col-xl-4 col-md-6">
            <div className="post-item position-relative h-100">

              <div className="post-img position-relative overflow-hidden">
                <img src={props.pimgsrc} className="img-fluid" alt=""/>
                <span className="post-date">{props.date}</span>
              </div>

              <div className="post-content d-flex flex-column">

                <h3 className="post-title">{props.tittle}</h3>

                <div className="meta d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-person"></i> <span className="ps-2">Lotus Property</span>
                  </div>
                  <span className="px-3 text-black-50">/</span>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-geo-alt"></i><span className="ps-2">Hyderabad</span>
                  </div>
                </div>

                <div className="row py-1">
                  <div className="col-md-12">
                    <p><i className="fas fa-th-large mx-2"></i><span>3</span>
                      <i className="fas fa-shower mx-2"></i><span>3</span>
                      <i className="fas fa-vector-square mx-2"></i><span>400<span>sq fts</span></span>
                    </p>
                  </div>

                </div>




                <hr/>

                <NavLink to={'/propertydetail'} className="readmore stretched-link"><span>More Details</span><i
                    className="bi bi-arrow-right"></i></NavLink>

              </div>

            </div>
          </div>
 
    </>
  );
}

export default Proeprtycard;