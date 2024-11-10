import { LOGO_IMG } from "../config/utils.js";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [btnName,setBtnName] = useState("login");

  return (
    <div className="container-hearder">
      <div>
        <img
          className="logo"
          src={LOGO_IMG}
        ></img>
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>cart</li>
          <button className="btn" onClick={()=>{
            btnName === "login" ? setBtnName("logout") : setBtnName("login")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;