import React from 'react';
import './footer.css';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-300 py-4">
      <div className='shortmessage'>
        <h3>Contact us</h3>
      </div>
      <div className="container mx-auto flex justify-center items-center">
        <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer" className="mr-4">
          <FaWhatsapp className="text-2xl hover:text-green-500" />
        </a>
        <a href="https://www.instagram.com/your-instagram-profile/" target="_blank" rel="noopener noreferrer" className="mr-4">
          <FaInstagram className="text-2xl hover:text-pink-500" />
        </a>
        <a href="https://www.facebook.com/your-facebook-profile/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-2xl hover:text-blue-500" />
        </a>
        
      
      </div>
    </footer>
  );
};

export default Footer;
