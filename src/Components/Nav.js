import { LOGO_IMG } from "../config/utils.js";
import { useState } from "react";
import {Link} from "react-router-dom";
const NavBar = () => {
  const [btnName,setBtnName] = useState("login");

  return (
    <div className="nav-bar">
      <div className="container-hearder">
        <div>
          <img className="logo" src={LOGO_IMG}></img>
        </div>
        <div className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>cart</li>
            <button
              className="btn"
              onClick={() => {
                btnName === "login"
                  ? setBtnName("logout")
                  : setBtnName("login");
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;