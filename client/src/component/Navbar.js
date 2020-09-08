import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const closeMobileNav = (e) => {
    console.log(e.target.id);
    console.log(e.target.className);
    if (
      e.target.id === "mobSlide-nav" ||
      e.target.className === "mobNav-items--list__link"
    ) {
      const slideNav = document.querySelectorAll(".mobNav");
      slideNav[0].style.width = "0%";
    }
  };
  const onClick = (e) => {
    if (e.target.parentNode.id === "menu-icon") {
      const slideNav = document.querySelectorAll(".mobNav");
      console.log(slideNav[0]);
      slideNav[0].style.width = "100%";
      window.addEventListener("click", closeMobileNav);
    }
  };
  return (
    <Fragment>
      <div className="Navbar">
        <div className="Navbar-logo"></div>
        <div className="Navbar-container">
          <ul className="Navbar-menu">
            <li className="Navbar-menu--list">
              <Link to="/" className="Navbar-menu--list__link">
                Home
              </Link>
            </li>
            {/*  <li className="Navbar-menu--list">
              <Link to="/services" className="Navbar-menu--list__link">
                Services
              </Link>
            </li>*/}
            <li className="Navbar-menu--list">
              <Link to="/aboutus" className="Navbar-menu--list__link">
                AboutUs
              </Link>
            </li>
            <li className="Navbar-menu--list">
              <Link to="/proposal" className="Navbar-menu--list__link">
                Proposal
              </Link>
            </li>
          </ul>
        </div>

        <div className="icon">
          <button className="icon-btn" id="menu-icon" onClick={onClick}>
            <i className="fas fa-bars"></i>
          </button>
          <div className="mobNav" id="mobSlide-nav">
            <div className="mobNav-container">
              <ul className="mobNav-items">
                <li className="mobNav-items--list">
                  {" "}
                  <Link to="/" className="mobNav-items--list__link">
                    Home
                  </Link>
                </li>
                <li className="mobNav-items--list">
                  <Link to="/aboutus" className="mobNav-items--list__link">
                    About
                  </Link>
                </li>
                <li className="mobNav-items--list">
                  <Link to="/proposal" className="mobNav-items--list__link">
                    Proposal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
