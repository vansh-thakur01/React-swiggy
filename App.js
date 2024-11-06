import React from "react";
import ReactDOM from "react-dom/client";
import { data } from "./api-data.js";

console.log(data);


const NavBar = () => {
  return (
    <div className="container-hearder">
      <div>
        <img
          className="logo"
          src="https://marketplace.canva.com/EAF_LMa_9X4/1/0/1200w/canva-black-and-white-flat-illustrative-food-place-logo-01bjLe6bM-8.png"
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

const RestCart = ({restdata}) => {
  const { cloudinaryImageId, avgRating ,cuisines,sla:{slaString:time},name} = restdata;
  return (
    <div className="res-cart">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+(cloudinaryImageId)} />
      <div className="cart-info">
        <h2>{name}</h2>
        <div className="div-in-div">
          <h4>{avgRating}</h4>
          <h4>{time}</h4>
        </div>
        <h4>{cuisines.join(",")}</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="main-container">
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="res-container">
        { data.restaurants.map((val,i) => (
          <RestCart key={data.restaurants[i].id} restdata={val} />
        ))}
      </div>
      <div>
        {[1,2,3]}
      </div>
    </div>
  );
};

console.log(data.restaurants.map((val) => <RestCart restdata={val} />));
const root = ReactDOM.createRoot(document.querySelector("#hithere"));

root.render(<Body />);
let a = ["ds","sadf"]
console.log(`hi there ${a}`);