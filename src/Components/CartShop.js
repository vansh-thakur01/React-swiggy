import { CART_MENU_IMG } from "../config/utils.js";

const CartShop = ({shop})=>{
<<<<<<< HEAD
<<<<<<< HEAD
  console.log(shop,"aaaaaaaaaaaaaaaaaaaa");
    return (
      <div className="">
        <div className="flex gap-x-5 mb-7">
          <img
            className="w-[65px] h-[65px]"
            src={CART_MENU_IMG + shop.cloudinaryImageId}
          ></img>
          <div className="leading-non mt-1">
            <h4 className="text-[18px] leading-[15px] font-semibold text-zinc-900 mb-1">
              {shop.name}
            </h4>
            <h5 className="text-gray-500 ">{shop.areaName}</h5>
          </div>
=======
=======
  console.log(shop,"aaaaaaaaaaaaaaaaaaaa");
>>>>>>> f510b87 (working on ep 12 still)
    return (
      <div className="flex gap-x-5 mb-7">
        <img
          className="w-[65px] h-[65px]"
          src={CART_MENU_IMG + shop[0].cloudinaryImageId}
        ></img>
        <div className="leading-none">
          <h4 className="text-lg font-semibold text-zinc-900">{shop.name}</h4>
          <h5 className="text-gray-500 ">{shop.areaName}</h5>
>>>>>>> 371fecf (working on 12ep)
        </div>
      </div>
    );
}

export default CartShop;