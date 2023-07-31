// import React, { useState } from "react";
// import "../css/Navbar.css";
// import { Link, NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [color, setColor] = useState(false);
//   const changeColor = () => {
//     if (window.scrollY >= 90) {
//       setColor(true);
//     } else {
//       setColor(false);
//     }
//   };

//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };
//   window.addEventListener("scroll", changeColor);

//   return (
//     <nav
//       className={
//         color
//           ? `navbar navbar-bg  ${menuOpen ? "open" : ""}`
//           : `navbar  ${menuOpen ? "open" : ""}`
//       }
//     >
//       <div className="logo">
//         <h3>Zukaz</h3>
//       </div>
//       <ul className={`menu ${menuOpen ? "open" : ""}`}>
//         <li>
//           <div>
//             <a
//               // style={({ isActive }) => ({
//               //   color: isActive ? "lightgreen" : "black navbar-bg navbar",
//               //   textDecoration: "none",
//               // })}
//               className={
//                 color
//                   ? `navbar-bg ${menuOpen ? "open" : ""}`
//                   : `link-color ${menuOpen ? "open" : ""}`
//               }
//               style={{ textDecoration: "none" }}
//             >
//               I'm Business
//             </a>
//           </div>
//         </li>
//         <li>Support</li>
//         <li>About</li>
//         <li>
//           <div style={{ marginRight: "40px", marginLeft: "400px" }}>
//             <a href="#" style={{ textDecoration: "none" }} className="btn">
//               Request Early Access
//             </a>
//           </div>
//         </li>
//       </ul>
//       <div
//         className={`menu-toggle ${menuOpen ? "open" : ""}`}
//         onClick={handleMenuToggle}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// Navbar.js
import React, { useState, useEffect } from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`navbar ${scrolling ? "scrolling" : ""}`}>
      <div className="navbar-logo">
        <a href="/">PodToks</a>
      </div>
      <div className={`navbar-list ${showMenu ? "show" : ""}`}>
        <ul>
          <li>
            <a href="#section1">I'm a Business</a>
          </li>
          <li>
            <a href="#section2">Support</a>
          </li>
          <li>
            <a href="#section3">About</a>
          </li>
        </ul>
      </div>
      <div className={`navbar-button ${scrolling ? "hide" : ""}`}>
        <button>See it in Action</button>
      </div>
      <div className="navbar-hamburger" onClick={handleMenuToggle}>
        <div className={`line ${showMenu ? "open" : ""}`}></div>
        <div className={`line ${showMenu ? "open" : ""}`}></div>
        <div className={`line ${showMenu ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
