import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

function Breadscrum(props) {
  return (
    <>
   <div class="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${props.bgimg1})`}}>
    <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">

      <h2 class="text-white">{props.tittle}</h2>
      <ol>
        <li><NavLink class="text-white" to={'/'}>{props.btnname}</NavLink></li>
        <li class="text-white">{props.btn2name}</li>
      </ol>

    </div>
  </div>
    </>
  );
}

export default Breadscrum;
