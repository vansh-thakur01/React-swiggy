import { LOGO_IMG } from "../config/utils.js";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../config/useOnlineStatus.js";
import { StyledLi } from "../config/StyledJSXElememnt.js";
import context from '../config/userContext.js'

const NavBar = () => {
  const {loginUser}= useContext(context);
  const [btnName, setBtnName] = useState(loginUser);
  const online = useOnlineStatus();
  
  return (
    <div className="text-2xl font-semibold bg-slate-200">
      <div className="test1 flex justify-between items-center  ">
        <Link to="/">
          <img className="w-32 " src={LOGO_IMG}></img>
        </Link>
        <div className="test2 ">
          <ul className="flex gap-10 translate-y-[20%]">
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
            <StyledLi>Cart</StyledLi>
            <button
              className="mr-8 bg-slate-800 text-slate-200 p-4 px-6 w-[120px] rounded-3xl -translate-y-[25%]"
              onClick={() => {
                btnName === loginUser
                  ? setBtnName("logout")
                  : setBtnName(loginUser);
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
