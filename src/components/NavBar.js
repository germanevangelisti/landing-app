import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

import "./NavBar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <p className="navbar-logo">UBA-1</p>
        <div className="navbar-menu">
          <ul className="navbar-links">
            <li>
              <button onClick={() => handleScrollToSection("#landing-section")}>
                landing-section
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollToSection("#cards-section-1")}>
                cards-section-1
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollToSection("#cards-section-2")}>
                cards-section-2
              </button>
            </li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={ faBars } size="xl" color='white' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
