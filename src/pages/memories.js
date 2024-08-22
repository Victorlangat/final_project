// src/pages/Memories.js

import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import photo1 from "../pics/photo1.jpg";
import photo2 from "../pics/photo2.jpg";
import photo3 from "../pics/photo3.jpg";
import photo4 from "../pics/photo4.jpeg";
import photo5 from "../pics/photo5.jpeg";
// import photo6 from "../pics/photo6.jpeg";
// import photo7 from "../pics/photo7.jpeg";
// import photo8 from "../pics/photo8.jpeg";
// import photo9 from "../pics/photo9.jpeg";
// import photo10 from "../pics/photo10.jpeg";
// import photo11 from "../pics/photo11.jpeg";
// import photo12 from "../pics/photo12.jpeg";
// import photo13 from '../pics/photo13.jpeg';
// import photo14 from '../pics/photo14.jpeg';
// import photo15 from '../pics/photo15.jpeg';
// import photo16 from '../pics/photo16.jpeg';

import "./memories.css";

const Memories = () => {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="body">
        <div className="text">
          <h1>
            <span className="styled">A </span>LIFE WELL LIVED
          </h1>
        </div>
        <div className="images">
          <div className="image1 clickable-image">
            <img src={photo1} alt="" />
          </div>
          <div className="image2 clickable-image">
            <img src={photo2} alt="" />
          </div>

          <div className="sidepiece">
            <div className="image3 clickable-image">
              <img src={photo3} alt="" />
            </div>
            <div className="image4 clickable-image">
              <img src={photo4} alt="" />
            </div>
          </div>
          <div className="image5 clickable-image">
            <img src={photo5} alt="" />
          </div>
        </div>
        <div className="foot">
          <Footer />
        </div>
      </div>

      <div className="foot"></div>
    </div>
  );
};

export default Memories;
