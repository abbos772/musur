import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { SiAliexpress } from "react-icons/si";
import { PiShoppingCartThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { FaRegSmileBeam } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";
import { Link } from "react-router-dom";
function Navbar() {
  let [shrink, setShrink] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  });
  return (
    <div className={`navbar continer ${shrink ? "shrink" : ""}`}>
      <Link to={"/"}>
        <div className="logo">
          <SiAliexpress
            style={{ color: "white", width: "150", height: "120" }}
          />
        </div>
      </Link>
      <div className="nav_text">
        <div className="box_katalog">
          <TbCategoryPlus
            style={{ color: "white", width: "25", height: "25" }}
          />
        </div>
        <div className="inp_flex">
          <input type="text" placeholder="search..." />
          <button>Найти</button>
        </div>
        <div className="box_katalog">
          <Link to={"/korzinka"}>
            <PiShoppingCartThin
              style={{ color: "white", width: "25", height: "25" }}
            />
          </Link>
        </div>
        <Link to={"/Like"}>
          <div className="box_katalog">
            <CiHeart style={{ color: "white", width: "25", height: "25" }} />
          </div>
        </Link>
        <div className="box_katalog">
          <FaRegSmileBeam
            style={{ color: "white", width: "20", height: "20" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
