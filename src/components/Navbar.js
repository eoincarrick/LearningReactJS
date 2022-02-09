import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { FaTimes, FaBars, FaTypo3 } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="navbarContainer">
          <Link to="/" className="navbarLogo">
            eoincarrick <FaTypo3 />
          </Link>
          <div className="menuIcon" onClick={handleClick}>
            <i className="faIcon">{click ? <FaTimes /> : <FaBars />}</i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
