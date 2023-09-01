import React from 'react';
import '../App.css';
import Breadscrum from '../Inner-components/Breadscrum';
import bg3 from '../lotus-images/gallery-banner.jpg'
import GalleryInner from '../Inner-components/GalleryInner';
function Gallery() {
  return (
    <>
    <Breadscrum tittle='Gallery' btnname='Home' visit='/' btn2name='Gallery' bgimg1={bg3} />
    <GalleryInner />
    </>
  );
}

export default Gallery;
