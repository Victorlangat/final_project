// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"> <span className='letter'>H</span>ome</Link>
        </li>
        <li>
          <Link to="/memories"> <span className='letter' >M</span>emories</Link> {/* Link to the Memories page */}
        </li>
        <li>
          <Link to="/eulogy"> <span className='letter' >E</span>ulogy</Link> {/* Link to the Eulogy page */}
        </li>
        <li>
            <a href="https://onekitty.co.ke/kitty/2686" target="_blank" rel="noopener noreferrer">
              <span className='letter'>C</span>ontributions
        </a>
            </li>
      </ul>
    </nav>
  );
};

export default Navbar;
