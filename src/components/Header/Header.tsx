import  React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/Carousel_images/himmel_icon.png" alt="Himmel icon" className="header-icon"></img>
        <h1 className="name">Lennard Tan</h1>
      </div>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/" className="nav-element">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-element">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-element">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
