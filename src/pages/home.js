import React from 'react';
import './home.css';
import Navbar from '../components/navbar'; 
import Footer from '../components/footer';
import realbackdrop from '../pics/realbackdrop.png';


const HomePage = () => {
  return (
    
    <div>
      <Navbar/>

      <div className='body'>
        
      <div className='content'>
        {/* Add your heartfelt message here */}
        <p className='passage'>
          "<span className='styled'>I</span>n the quiet corners of our hearts, your memory lives on. <br /> Your
          laughter, your kindness, and the warmth of your love remain etched in
          our souls. <br />Though you are no longer with us, your spirit continues to
          guide us, and your legacy lives through <br /> the stories we share. <br />Rest in
          peace, dear <span className='styled'>B</span>etty Cherono Langat."
        </p>

        <div className='image'>
          <img src={realbackdrop} alt="pic" />

        </div>

      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      

      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;

