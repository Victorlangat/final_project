import React from "react";
import './eulogy.css';
import Navigation from "../components/navbar";
import Footer from "../components/footer";
import background from '../pics/background.jpg';

function story() {
  return (
    <div className="body">
      <div className="navbar">
        <Navigation />
      </div>

      <div className="the_story">
        <p>
          <span className="styled" >I</span>n the quiet stillness of this moment, we gather to honor the life of <span className="styled" >B</span>etty Langat. A gentle soul, a loving heart, and a spirit that touched the lives of all who knew her. Betty was a beacon of kindness, always ready to lend a helping hand or offer a comforting word. Their laughter was contagious, their smile could brighten any room, and their presence was a gift to those fortunate enough to share their company.
        </p>
        <div className="backgroundimage" >
            <img src={background} alt="" />
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default story;