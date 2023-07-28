import React, { useState } from "react";
import "../css/Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  window.addEventListener("scroll", changeColor);

  return (
    <nav
      className={
        color
          ? `navbar navbar-bg  ${menuOpen ? "open" : ""}`
          : `navbar  ${menuOpen ? "open" : ""}`
      }
    >
      <div className="logo">
        <h3>Zukaz</h3>
      </div>
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
        <li>
          <div>
            <a
              // style={({ isActive }) => ({
              //   color: isActive ? "lightgreen" : "black navbar-bg navbar",
              //   textDecoration: "none",
              // })}
              className={
                color
                  ? `navbar-bg ${menuOpen ? "open" : ""}`
                  : `link-color ${menuOpen ? "open" : ""}`
              }
              style={{ textDecoration: "none" }}
            >
              I'm Business
            </a>
          </div>
        </li>
        <li>Support</li>
        <li>About</li>
        <li>
          <div style={{ marginRight: "40px", marginLeft: "400px" }}>
            <a href="#" style={{ textDecoration: "none" }} className="btn">
              Request Early Access
            </a>
          </div>
        </li>
      </ul>
      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={handleMenuToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
