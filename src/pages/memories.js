// src/pages/Memories.js

import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import './memories.css';
import photo1 from '../pics/photo1.jpg';
import photo2 from '../pics/photo2.jpg';
import photo3 from '../pics/photo3.jpg';
import photo4 from '../pics/photo4.webp';
import photo5 from '../pics/photo5.webp';

const Memories = () => {


  return (
    <div>
      <div className='navbar'>
        <Navbar/>

      </div>
  
      <div className='body'>
      <div className='text'>
        <h1><span className='styled'>A  </span>LIFE WELL LIVED</h1>
      </div>
      <div className='images'>
        <div className='image1 clickable-image'>
            <img src={photo1} alt="" />

        </div>
        <div className='image2 clickable-image'>
            <img src={photo2} alt="" />

        </div>

        <div className='sidepiece' >
        <div className='image3 clickable-image'>
            <img src={photo3} alt="" />

        </div>
        <div className='image4 clickable-image'>
            <img src={photo4} alt="" />

        </div>

        </div>
        <div className='image5 clickable-image'>
            <img src={photo5} alt="" />

        </div>



      </div>
      <div className="foot">
        <Footer/>
        </div>

      </div>

      
      <div className="foot">
        
      </div>
    </div>
  );
};

export default Memories;


