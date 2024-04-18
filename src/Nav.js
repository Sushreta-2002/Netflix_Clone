import React, {useState, useEffect} from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] =useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100){
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll', null);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
       <img
        className="nav_logo"
        src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png"
        alt="Netflix Logo" 
        />
        <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
        alt="Netflix Logo" />
    </div>
  )
}

export default Nav;    