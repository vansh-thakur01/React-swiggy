import { LOGO_IMG } from "../config/utils.js";

const NavBar = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default NavBar;