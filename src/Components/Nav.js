import { LOGO_IMG } from "../config/utils.js";
import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../config/useOnlineStatus.js";

const NavBar = () => {
  const [btnName,setBtnName] = useState("login");
  const online = useOnlineStatus();

  return (
    <div className="nav-bar text-xl bg-red-400">
      <div className="container-hearder flex justify-between items-center bg-teal-500">
        <div>
          <img className="logo w-32" src={LOGO_IMG}></img>
        </div>
        <div className="nav bg-black-200 bg-slate-700">
          <ul className="flex">
            <li className="pl-10 bg-black">online {online ? "✅" : "🔴"}</li>
            <li className="pl-10 ">
              <Link to="/">Home</Link>
            </li>
            <li className="bg-black pl-28 pt-10">
              <Link to="/about">About</Link>
            </li>
            <li className="bg-red-200 pr-52">
              <Link to="/contact">Contact us</Link>
            </li>
            <li className="bg-green-300 pr-20 pb-52">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="bg-orange-600 pl-1 m-1">cart</li>
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