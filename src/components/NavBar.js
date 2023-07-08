import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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

  const menuItems = [
    {
      id: "#landing-section",
      link: "/",
      name: "Landing Section",
      onClick: () => handleScrollToSection("#landing-section"),
      // icon: <HomeIcon className="text-white" />,
    },
    {
      id: "#card-section-1",
      link: "/section-1",
      name: "Card Section 1",
      onClick: () => handleScrollToSection("#cards-section-1"),
      // icon: <BookIcon className="text-white" />,
    },
    {
      id: "#card-section-2",
      link: "/section-2",
      name: "Card Section 2",
      onClick: () => handleScrollToSection("#cards-section-2"),
      // icon: <HowToRegIcon className="text-white" />,
    },
  ];

  return (
    <div className="root">
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
    </div>
  );
};

export default Navbar;
