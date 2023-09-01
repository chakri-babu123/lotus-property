import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Property from './Components/Property';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar-footer/Navbar';
import Footer from './Navbar-footer/Footer';
import Propertydetail from './Components/Propertydetail';
import Thanqpage from './Inner-components/Thanqpage';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/property' element={<Property />} />
    <Route path='/gallery' element={<Gallery />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/thanqpage' element={<Thanqpage />} />
    <Route path='/propertydetail' element={<Propertydetail />} />
   </Routes>
   <Footer />
   </div>
 
  );
}

export default App;
