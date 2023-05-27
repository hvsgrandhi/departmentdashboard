import React from "react";
import "./navbar.css";
// import navLogo from './img3.gif';
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export default function Navbar() {
  const text =  ["IT Department Dashboard", "DTE Code: 615624610"];

  const fontFamily = "Courier New, monospace";
  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateX(-100%)' },
    to: { opacity: 1, transform: 'translateX(0%)' },
    delay: 1100,
  });

  return (
    <>
      <div className="navbar-header my-1">
  <div style={{ display: "flex", alignItems: "center" }}>
    <a
      className="navbar-brand"
      href="/"
      title="Marathwada Mitra Mandal's College of Engineering"
      style={{ display: "flex", alignItems: "center" }}
    >
      <img
        src="https://www.mmcoe.edu.in/images/mmcoe-logo.jpg"
        alt="MMCOE"
        style={{ marginRight: "10px" }}
      />
      <div className="logoText">
        <h4
          style={{
            color: "#174e86",
            fontFamily: "cursive",
            marginBottom: "6px",
            fontWeight: "600",
            marginTop: "5px",
          }}
        >
          Marathwada Mitra Mandal's
        </h4>
        <h5>
          College of Engineering
        </h5>
        <p
          id="naacdisplayid"
          style={{
            fontSize: "10px",
            color: "black",
            wordWrap: "break-word",
            width: "250px",
            lineHeight: "5px",
          }}
        >
          (Approved by AICTE New Delhi, Recognized by DTE <br /><br /><br /><br />
          Maharashtra and affiliated to Savitribai Phule Pune University)
          <h6
            style={{
              color: "#e01e43",
              fontSize: "13px",
              fontWeight: "600",
              marginTop: "4px",
              marginBottom: "0px",
            }}
          ><br />
            Accredited with 'A++' Grade by NAAC
          </h6>
        </p>
      </div>
    </a>
    <div style={{ flex: 1 }}></div>
    <animated.div style={springProps}>
      <h1 style={{ fontSize:'29px', color: 'black', marginRight:'8px',fontFamily}}>{text[0]}</h1>
      <h1 style={{ fontSize:'20px', color: 'black', marginRight:'8px',fontFamily}}>{text[1]}</h1>
    </animated.div>
  </div>
</div>

      <div className="page-wrapper">
        <div className="nav-wrapper">
          <div className="grad-bar"></div>
          <nav className="navbar sticky-top ">
            <Link to="/" className="navLogo" style={{ margin: "5px", fontSize:'25px' }}>
              IT Department Dashboard
            </Link>
            {/* <img src={navLogo} alt="Company Logo" /> */}
            {/* <div className="menu-toggle" id="mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div> */}
            <ul className="nav mr-auto">
              <li className="nav-item mx-auto">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item mx-auto">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-item mx-auto">
                <Link to="/events">Events</Link>
              </li>
              <li className="nav-item mx-auto">
                <Link to="/placements">Placements</Link>
              </li>
              <li className="nav-item mx-auto">
                <Link to="/feedback">Feedback</Link>
              </li>
              
              <li className="nav-item mx-auto">
                <Link to="/teachingstaff">Faculty</Link>
              </li>
              {/* <i className="fas fa-search" id="search-icon"></i> */}
              {/* <input className="search-input" type="text" placeholder="Search.."/> */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
