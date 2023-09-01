import React from 'react';
import '../App.css';
import Breadscrum from '../Inner-components/Breadscrum';
import bg4 from '../lotus-images/property-banner.jpg'
import Propertyinnder from '../Inner-components/PropertyInnder';

function Property() {
  return (
    <>
     <Breadscrum tittle='Property' btnname='Home' visit='/propertydeatil' btn2name='Property' bgimg1={bg4} />
     <Propertyinnder />
    </>
  );
}

export default Property;
