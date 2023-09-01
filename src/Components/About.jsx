import React from 'react';
import '../App.css'
import Breadscrum from '../Inner-components/Breadscrum';
import bg2 from '../lotus-images/about-us-baner.jpg'
import AboutInner from '../Inner-components/AboutInner';
function About() {
  return (
    <>
    <Breadscrum tittle='About Us' btnname='Home' visit='/' btn2name='About Us' bgimg1={bg2} />
    <AboutInner />
    </>
  );
}

export default About;
