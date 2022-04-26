import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Nav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const hideMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <Link className="contained-nav" to="/">
        <img src="/dalton-huey-logo.svg" className="nav-logo" />
      </Link>

      <div className={`nav-collection ${isOpen ? "active-menu" : ""}`}>
        <Link className="nav-link" to="/" onClick={hideMenu}>
          home
        </Link>
        <Link className="nav-link" to="/tech" onClick={hideMenu}>
          tech
        </Link>
        <Link className="nav-link" to="/video" onClick={hideMenu}>
          video
        </Link>
        <Link className="nav-link" to="/contact" onClick={hideMenu}>
          contact
        </Link>
      </div>

      <div
        className={`nav-collection icon-collection ${
          isOpen ? "active-menu" : ""
        }`}
      >
        <a
          href="https://www.instagram.com/daltonhuey/"
          target="_blank"
          className="nav-icon"
          onClick={hideMenu}
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/dalton-huey-043294130/"
          target="_blank"
          className="nav-icon"
          onClick={hideMenu}
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCKtWFt8o8FsnwBSuteChGKg"
          target="_blank"
          className="nav-icon"
          onClick={hideMenu}
        >
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a
          href="https://github.com/dhuey"
          target="_blank"
          className="nav-icon"
          onClick={hideMenu}
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://open.spotify.com/artist/3j6ieJQL0HEzNKNGVOIOL7?si=ba1132328e2e4c98"
          target="_blank"
          className="nav-icon"
          onClick={hideMenu}
        >
          <i className="fa-brands fa-spotify"></i>
        </a>
      </div>

      <a href="#" className="menu" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
    </nav>
  );
};
