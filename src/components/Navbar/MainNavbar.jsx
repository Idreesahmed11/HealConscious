import React, { useState } from "react";
import "./MainNavbar.css";
import logo from "../../assets/Heal-Conscious-Logo-black.png";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

function MainNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="main-navbar">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <button
          className={`menu-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <RiCloseLine size={30} /> : <RiMenu3Line size={30} />}
        </button>

        <ul className={`nav-menu ${open ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setOpen(false)}>HOME</Link></li>
          <li>
            <Link to="/careox" onClick={() => setOpen(false)}>
              WHAT IS CAREOX <IoIosArrowDown />
            </Link>
          </li>
          <li><Link to="/connect" onClick={() => setOpen(false)}>CONNECT</Link></li>
          <li><Link to="/store" onClick={() => setOpen(false)}>STORE</Link></li>
          <li>
            <Link to="/about" onClick={() => setOpen(false)}>
              WHO ARE YOU <IoIosArrowDown /> <IoSearchSharp />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainNavbar;