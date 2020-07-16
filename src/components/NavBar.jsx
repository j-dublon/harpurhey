import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav className="nav">
      <img
        src={require("../images/Harpurhey.png")}
        alt="Harpurhey logo"
        className="nav__logo"
      />
      <section className="nav__links">
        <Link to={"/"} className="nav__links__item">
          Home
        </Link>
        <Link to={"/about"} className="nav__links__item">
          About
        </Link>
        <Link to={"/activities"} className="nav__links__item">
          Activities
        </Link>
        <Link to={"/news"} className="nav__links__item">
          News
        </Link>
        <Link to={"/contact"} className="nav__links__item">
          Contact
        </Link>
      </section>
    </nav>
  );
};

export default NavBar;
