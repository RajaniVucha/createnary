import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import background from "../images/background.png";
import hero_image from "../images/hero_image.png";
import ShareImage from "../images/image 5.png";

const Works = () => {
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
    <>
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
              <FaTimes size={20} style={{ color: "white" }} />
            ) : (
              <FaBars size={20} style={{ color: "white" }} />
            )}
          </div>
        </div>
      </div>
      <div className="works">
        <div className="works-left">
          <div>
            <p>
              <h1>GetSetYo handholdsyou at every step of the way</h1>
            </p>
          </div>
          <div>
            <p>
              {" "}
              You focus on helping your friends and family. We take care of
              everything else
            </p>
          </div>
          <div>
            <Link to="/works">
              <button className="button">Get Started</button>
            </Link>
          </div>
        </div>
        <div className="vertical-line-container">
          <div className="vertical-line"></div>
          <div className="numbers">
            <div className="box"> 1</div>
            <div className="box">2</div>
            <div className="box">3</div>
            <div className="box">4</div>
            {/* Add more numbers as needed */}
          </div>
        </div>
        <div className="works-left">
          <div>
            <p>
              <h3>
                Share the holidays, stays and experiences with your family and
                friends
              </h3>
            </p>
          </div>
          <div>
            <p>
              You receive trending & curated Itineraries and Insider deals on
              Hotels & Flights to share?
            </p>
          </div>
          <div>
            <img src={ShareImage} alt="Description" />
          </div>
          <div>
            <p>
              <h3>
                Share the holidays, stays and experiences with your family and
                friends
              </h3>
            </p>
          </div>
          <div>
            <p>
              You receive trending & curated Itineraries and Insider deals on
              Hotels & Flights to share?
            </p>
          </div>
          <div>
            <img src={ShareImage} alt="Description" />
          </div>
          <div>
            <p>
              <h3>
                Share the holidays, stays and experiences with your family and
                friends
              </h3>
            </p>
          </div>
          <div>
            <p>
              You receive trending & curated Itineraries and Insider deals on
              Hotels & Flights to share?
            </p>
          </div>
          <div>
            <img src={ShareImage} alt="Description" />
          </div>
          <div>
            <p>
              <h3>
                Share the holidays, stays and experiences with your family and
                friends
              </h3>
            </p>
          </div>
          <div>
            <p>
              You receive trending & curated Itineraries and Insider deals on
              Hotels & Flights to share?
            </p>
          </div>
          <div>
            <img src={ShareImage} alt="Description" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
