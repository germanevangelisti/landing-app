import React, { useState } from "react";

import MobileDrawer from "./MobileDrawer";

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const menuItems = [
    {
      id: "#landing-section",
      link: "/",
      name: "Landing Section",
      onClick: () => handleScrollToSection("#landing-section"),
    },
    // {
    //   id: "#card-section-1",
    //   link: "/section-1",
    //   name: "Card Section 1",
    //   onClick: () => handleScrollToSection("#cards-section-1"),
    // },
    // {
    //   id: "#card-section-2",
    //   link: "/section-2",
    //   name: "Card Section 2",
    //   onClick: () => handleScrollToSection("#cards-section-2"),
    // },
    // {
    //   id: "#counter-section",
    //   link: "/counter-section",
    //   name: "Counters",
    //   onClick: () => handleScrollToSection("#counter-section"),
    // },
    {
      id: "services-section",
      link: "/services-section",
      name: "Servicios",
      onClick: () => handleScrollToSection("#services-section"),
    }
  ];

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-wrapper">
          <p className="navbar-logo">UBA-1</p>
          <div className="navbar-menu">
            <ul className="navbar-links">
              {menuItems.map((item) => (
                <li>
                  <button onClick={item.onClick}>{item.name}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-toggle" onClick={toggleMenu}>
            <div className={isOpen ? "changedBar-container" : "bar-container"}>
              <div className={isOpen ? "changeBar1" : "bar1"}></div>
              <div className={isOpen ? "changeBar2" : "bar2"}></div>
              <div className={isOpen ? "changeBar3" : "bar3"}></div>
            </div>
          </div>
        </div>
      </nav>
      <MobileDrawer
        menuItems={menuItems}
        anchor="right"
        open={isOpen}
        // selectedItem={selectedTab}
        onClose={toggleMenu}
      />
    </React.Fragment>
  );
};

export default Navbar;
