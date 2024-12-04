import { LOGO_IMG } from "../config/utils.js";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../config/useOnlineStatus.js";
import { StyledLi } from "../config/StyledJSXElememnt.js";
import context from '../config/userContext.js'
import { useSelector } from "react-redux";

const NavBar = () => {
  const {loginUser} = useContext(context);
  const [btnName, setBtnName] = useState(loginUser);
  const online = useOnlineStatus();
  console.log(btnName,"btn");
  
  const cart = useSelector((store)=> store.cart.items);

  return (
    <div className="text-2xl font-semibold bg-slate-200">
      <div className="test1 flex justify-between items-center  ">
        <Link to="/">
          <img className="w-32 " src={LOGO_IMG}></img>
        </Link>
        <div className="test2 ">
          <ul className="flex gap-14 translate-y-[20%]">
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
            <StyledLi>
              <Link to="/cart">
                <div className="flex items-center gap-1 relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-11 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>

                  <div>Cart</div>
                  <div className="absolute left-[13%] top-[15%] text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                    {cart.length}
                  </div>
                </div>
              </Link>
            </StyledLi>
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
