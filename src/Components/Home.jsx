import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import '../App.css';
import Header from '../Inner-components/Header';
import GalleryInner from '../Inner-components/GalleryInner';
import Propertyinnder from '../Inner-components/PropertyInnder';
import Testimoinal from '../Inner-components/Testimoinal';
import AboutSection from '../Inner-components/AboutSection';
import Minicontact from '../Inner-components/Minicontact';
import Callback from '../Inner-components/Callback';


function Home() {
  return (
    <>
    <Header />
   <AboutSection />
    <Propertyinnder />
    <GalleryInner />
    <Testimoinal />
    <Minicontact />
    <Callback />
    </>
  );
}

export default Home;
