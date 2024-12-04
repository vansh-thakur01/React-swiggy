import store from "../config/reduxStore/store.js";
import ResMenuCard from "./ResMenuCards.js";
import { useSelector } from "react-redux";
const Cart = () => {
  const data = useSelector((store)=>store.cart.items);
  console.log(data);
  return (
    <div className="bg-gray-200 h-screen">
      <div className="pt-10 w-[1400px] mx-auto flex gap-x-10">
        <div className="[&>div]:bg-slate-50 grid gap-8">
          <div className="h-[400px] w-[850px]"></div>
          <div className="h-[100px] w-[850px]"></div>
        </div>
        <div>
          <div className="bg-slate-50 w-[400px] h-[500px]">
            {/* {data.length > 0 ? data.map(val=> <ResMenuCard resdata={val} />): <>Add items in cart first</>} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
