import store from "../config/reduxStore/store.js";
import ResMenuCard from "./ResMenuCards.js";
import { useSelector } from "react-redux";
import CartShimmer from "./CartShimmer.js";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import CartItem from "./CartItem.js";
import CartShop from "./CartShop.js";
import DialogBox from "./DialogBox.js";

const Cart = () => {
  const storeResItems = useSelector((storeData) => storeData.cart.items);
  const storeRestorent = useSelector((storeData) => storeData.cart.shop);
  const [shop, setShop] = useState(null);

  useEffect(() => {
    setShop(storeRestorent);
  }, []);

  if (shop === null) return <CartShimmer />;
  console.log(shop,"shoooooooooooooooooooooooop");
  const itemTotal = storeResItems.map(val=>(val[0]?.price * val.length)/100).reduce((acc,cur)=>acc+cur);
  const deliveryfee = 70;
  const extraDis = 20;
  const platformFee = 7;
  const gst = 28.80;
  return (
    <div className="bg-red-600 h-screen">
      <div className="pt-10 w-[1300px] mx-auto flex gap-x-10 bg-black">
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
            <div className=" bg-slate-50 w-[430px] h-[510px] overflow-x-hidden px-6 py-5 pr-2">
              <div className=" pr-5">
                {storeResItems.map((item, i) => (
                  <CartItem item={item} i={i} />
                ))}
              </div>
              <div className="my-5 mt-6 pr-5">
                <div className=" bg-slate-200 w-[100%] h-[50px]"></div>
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
                <div className="flex justify-between items-center tracking-wider font-bold text-[17px]">
                  <div>TO PAY</div>
                  <div>₹{(itemTotal+deliveryfee+platformFee+gst)-extraDis}</div>
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
