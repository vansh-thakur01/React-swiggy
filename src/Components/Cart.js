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

  return (
    <div className="bg-red-600 h-screen">
      <div className="pt-10 w-[1350px] mx-auto flex gap-x-10 bg-black">
        <div className="[&>div]:bg-slate-50 grid gap-8">
          <div className="h-[400px] w-[850px]"></div>
          <div className="h-[100px] w-[850px]"></div>
        </div>
        <div>
          <div className="bg-slate-50 w-[400px] h-[500px] px-7 py-5 pr-2">
            <Link to={"/restaurant/" + shop.id}>
                <CartShop shop={shop} />
            </Link>
            <div className="w-[370px]">
              {storeResItems.map((item, i) => (
                <CartItem item={item} i={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
