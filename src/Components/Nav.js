import { LOGO_IMG } from "../config/utils.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../config/useOnlineStatus.js";

const NavBar = () => {
  const [btnName, setBtnName] = useState("login");
  const online = useOnlineStatus();

  return (
    <div className="text-2xl font-semibold bg-slate-200">
      <div className="container-hearder flex justify-between items-center  ">
        <div>
          <img className="w-32" src={LOGO_IMG}></img>
        </div>
        <div>
          <ul className="flex gap-7 translate-y-[20%]">
            <li className="hover:text-neutral-950 text-neutral-800" >online {online ? "✅" : "🔴"}</li>
            <li className="hover:text-neutral-950 text-neutral-800">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-neutral-950 text-neutral-800">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-neutral-950 text-neutral-800">
              <Link to="/contact">Contact us</Link>
            </li>
            <li className="hover:text-neutral-950 text-neutral-800">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="hover:text-neutral-950 text-neutral-800">cart</li>
            <button
              className="mr-8 bg-slate-800 text-slate-200 p-4 px-6 w-[120px] rounded-3xl -translate-y-[25%]"
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
