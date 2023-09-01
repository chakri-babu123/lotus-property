import React from 'react';
import '../App.css';
import Breadscrum from '../Inner-components/Breadscrum';
import bg1 from '../lotus-images/property-baner.jpg'
import ContactInner from '../Inner-components/ContactInner';
function Contact() {
  return (
    <>
   <Breadscrum tittle='Contact Us' btnname='Home' visit='/' btn2name='Contact Us' bgimg1={bg1} />
   <ContactInner />
    </>
  );
}

export default Contact;
