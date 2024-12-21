import CartEmptyImg from "../config/images/cart-empty.png";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className="flex justify-center items-center w-screen h-[87vh] bg-gray-100">
      <div className="text-center">
        <img src={CartEmptyImg} alt="cartempty"></img>
        <h4 className="m-1 text-2xl font-semibold tracking-wide text-gray-800">
          Your cart is empty
        </h4>
        <h5 className="mb-8 text-[17.2px] text-gray-400">
          You can go to home page to view more restaurants
        </h5>
        <Link to="/">
          <button className="py-2 px-6 tracking-wide bg-orange-500 text-slate-50 text-lg font-bold">
            SEE RESTAURANTS NEAR YOU
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartEmpty;
