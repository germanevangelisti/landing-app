import React from "react";

import "./NavBar.css";

const Navbar = () => {
  const handleScrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <p className="navbar-logo">UBA-1</p>
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
    </nav>
  );
};

export default Navbar;
