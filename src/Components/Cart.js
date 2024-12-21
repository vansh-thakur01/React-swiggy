import store from "../config/reduxStore/store.js";
import ResMenuCard from "./ResMenuCards.js";
import { useSelector } from "react-redux";
import CartShimmer from "./CartShimmer.js";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import CartItem from "./CartItem.js";
import CartShop from "./CartShop.js";
import DialogBox from "./DialogBox.js";
import CartEmpty from "./CartEmpty.js";

const Cart = () => {
  const storeResItems = useSelector((storeData) => storeData.cart.items);
  const storeRestorent = useSelector((storeData) => storeData.cart.shop);
  const [shop, setShop] = useState(null);
  const [value,setValue] = useState("");

  useEffect(() => {
    setShop(storeRestorent);
  }, []);
  
  
  if (shop === null ) return <CartShimmer />;
  if(storeResItems.length < 1) return <CartEmpty/>
  console.log(shop,"shoooooooooooooooooooooooop");
  const itemTotal = storeResItems.map(val=>(val[0]?.price * val.length)/100).reduce((acc,cur)=>acc+cur);
  const deliveryfee = 70;
  const extraDis = 20;
  const platformFee = 7;
  const gst = 28.80;
  return (
    <div className="bg-gray-200 h-screen">
      <div className="pt-10 w-[1320px] mx-auto flex gap-x-10 bg-gray-200">
        <div className="[&>div]:bg-slate-50 grid gap-3 max-h-[600px]">
          <div className="h-[400px] w-[850px]"></div>
          <div className="h-[100px] w-[850px]"></div>
        </div>
        <div>
          <div className="retalive">
            <div className="sticky top-0 bg-slate-50  w-[430px] h-[90px] px-6 py-5 pr-2">
              <Link to={"/restaurant/" + shop[0].id}>
                <CartShop shop={shop[0]} />
              </Link>
            </div>
            <div className=" bg-slate-50 w-[430px] h-[525px] overflow-x-hidden px-6 py-5 pr-2">
              <div className=" pr-5">
                {storeResItems.map((item, i) => (
                  <CartItem item={item} i={i} />
                ))}
              </div>
              <div className="my-5 mt-6 pr-5">
                <div className="text-[14.7px] flex gap-2 bg-gray-100 w-[100%] h-[60px] items-center justify-center">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-2 0 219 165"
                  className="w-3 h-3 stroke-black mt-1"
                >
                  <path 
                    d="M125.146,147.52q-14.44-15-14.432-41.508,0-57.718,77.741-106.012l5.3,8.231q-54.78,35.928-54.773,71.854c0,.287.045.523.045.8a45.148,45.148,0,0,1,64.277,63.074c-.537.706-1.246,1.35-1.83,2.026-.283.3-.542.6-.831.887a42.618,42.618,0,0,1-3.362,3.591q-13.539,12.082-35.632,12.081T125.146,147.52Zm-110.718-.006Q0,132.514,0,106,0,48.3,77.735,0l5.307,8.235C47.278,31.7,29.152,55.154,28.411,78.6a44.986,44.986,0,0,1,71.683,42.354c0,.137.023.231.023.36q0,17.068-13.546,29.145T50.94,162.53Q28.857,162.53,14.428,147.514Z"
                    class="stroke-black"
                    stroke-width="4"
                  />
                </svg>

                  <input onChange={(e)=>setValue(e.target.value)} value={value} className= "focus:outline-none w-[65%] bg-gray-100" type="text" placeholder="Any suggestions? We will pass it on..."></input>
                </div>
              </div>
              <div className="pr-5">
                <h1 className="font-semibold text-[17px] mb-2">Bill Details</h1>
                <ul className="[&>li]:flex [&>li]:justify-between [&>li]:items-center text-gray-600 leading-8 border-b-2 mb-4 pb-4 border-slate-300">
                  <li>
                    <div>item Total</div>
                    <div>₹{itemTotal}</div>
                    </li>
                  <li>
                    <div>Delivery Fee | 11.km</div>
                    <div>₹{deliveryfee}</div>
                  </li>
                  <li>
                    <div>Extra discount for you</div>
                    <div>₹{extraDis}</div>
                  </li>
                </ul>
                <ul className="[&>li]:flex [&>li]:justify-between [&>li]:items-center text-gray-600 leading-8 border-b-[2.4px] pb-4 mb-6 border-gray-900">
                  <li className="flex justify-between items-center">
                    <div>Delivery Tip</div>
                    <div>555</div>
                  </li>
                  <li>
                    <div>Platform fee</div>
                    <div>₹{platformFee}</div>
                  </li>
                  <li>
                    <div>GST and Restaurant Charges</div>
                    <div>₹{gst}</div>
                  </li>
                </ul>
                <div className="flex justify-between items-center tracking-wider font-bold text-[17px] mb-4">
                  <div>TO PAY</div>
                  <div>₹{((itemTotal+deliveryfee+platformFee+gst)-extraDis).toFixed(2)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
