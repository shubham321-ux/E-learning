import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ isAuth }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="main-header">
         <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      <div className="header-container">
        <div className="logo">E-Learning</div>

     
      </div>


      <div className={`link ${showMenu ? "show" : ""}`}>
        <Link onClick={toggleMenu} to={"/"}>Home</Link>
        <Link onClick={toggleMenu} to={"/courses"}>Courses</Link>
        <Link onClick={toggleMenu} to={"/about"}>About</Link>
        {isAuth ? (
          <Link onClick={toggleMenu} to={"/account"}>Account</Link>
        ) : (
          <Link onClick={toggleMenu} to={"/login"}>Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
