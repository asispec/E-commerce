import React, { useRef } from "react";
import "../Style/All.css";
import img from "../assets/Vector (12).svg";
import img1 from "../assets/Cart1 with buy.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
function All() {
  return (
    <div>
      <nav>
        <h1>Exclusive</h1>
        <ul>
          <NavLink className="li" to={"/"}>
            Home
          </NavLink>
          <NavLink className="li" to={"/contact"}>
            Contact
          </NavLink>
          <NavLink className="li" to={"/about"}>
            About
          </NavLink>
          <NavLink className="li" to={"/signUp"}>
            Sign Up
          </NavLink>
        </ul>
        <div className="right-nav">
          <input type="search" name="search" id="search" placeholder="Search" />
          <img src={img} alt="" />
          <img src={img1} alt="" />
        </div>
      </nav>
    </div>
  );
}

export default All;
