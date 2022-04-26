import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-menu">
        <Link className="nav-link" to="/music">
          music
        </Link>
        <Link className="nav-link" to="/tech">
          tech
        </Link>
        <Link className="nav-link" to="/video">
          video
        </Link>
        <Link className="nav-link" to="/contact">
          contact
        </Link>
      </div>

      <div>
        <Link className="footer-logo-link" to="/">
          <img src="/dalton-huey-logo.svg" className="nav-logo footer-logo" />
        </Link>
      </div>
    </footer>
  );
};
