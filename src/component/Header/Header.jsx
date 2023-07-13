import React, { useState } from "react";
import "./Header.css";
import logo from "../../img/logo-singolo.png";
import logo2 from "../../img/testo logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <header className="header z-50 shadow-2xl" id="home">
        <div className="logo">
          <a href="/tecnostampa">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="logo2 ">
          <img className="w-[230px]" src={logo2} alt="logo2" />
        </div>
        <div className=" text-white text-[1.8rem] z-50" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </header>
      <nav className={click ? "nav active" : "nav"}>
        <ul className="lista">
          <li>
            <Link to="/tecnostampa" onClick={handleClick}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/Shop" onClick={handleClick}>
              SHOP
            </Link>
          </li>
          <li>
            <Link to="/Storia" onClick={handleClick}>
              STORIA
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
