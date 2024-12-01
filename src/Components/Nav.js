import { LOGO_IMG } from "../config/utils.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../config/useOnlineStatus.js";
import { StyledLi } from "../config/StyledJSXElememnt.js";

const NavBar = () => {
  const [btnName, setBtnName] = useState("login");
  const online = useOnlineStatus();

  return (
    <div className="op text-2xl font-semibold bg-slate-200">
      <div className="test1 flex justify-between items-center  ">
        <Link to="/">
          <img className="w-32 " src={LOGO_IMG}></img>
        </Link>
        <div className="test2">
          <ul className="flex gap-7 translate-y-[20%]">
            <StyledLi>{online ? "Online✅" : "Offline🔴"}</StyledLi>
            <StyledLi>
              <Link to="/">Home</Link>
            </StyledLi>
            <StyledLi>
              <Link to="/about">About</Link>
            </StyledLi>
            <StyledLi>
              <Link to="/contact">Contact us</Link>
            </StyledLi>
            <StyledLi>
              <Link to="/grocery">Grocery</Link>
            </StyledLi>
            <StyledLi>cart</StyledLi>
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
