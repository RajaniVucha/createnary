import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scolly >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  return (
    <div className="header">
      <div className="menu">
        <div className="createnary">Createnary</div>
        <div className="search">
          <input type="text" placeholder="Search Creators"></input>
        </div>
        <div className="nav">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/">Cart</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "black" }} />
            ) : (
              <FaBars size={20} style={{ color: "black" }} />
            )}
          </div>
        </div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div>
            <h1>Welcome To India's First</h1>
          </div>
          <div className="blue-text">
            <h2>Creator's Marketplace</h2>
          </div>
          <div>
            <p>
              <h3>Create your first E-Store @ Zero Cost</h3>
            </p>
            <p>
              Empower your creativity with Createnary. Showcase, sell, and
              connect with a global audience effortlessly, turn your products
              into proft
            </p>
          </div>
          <div>
            <Link to="/works">
              <button className="button">Get Started</button>
            </Link>
          </div>
        </div>
        <div className="hero-image"></div>
      </div>
    </div>
  );
};

export default Header;
