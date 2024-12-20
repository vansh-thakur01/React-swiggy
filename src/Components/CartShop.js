import { CART_MENU_IMG } from "../config/utils.js";

const CartShop = ({shop})=>{
  console.log(shop,"aaaaaaaaaaaaaaaaaaaa");
    return (
      <div className="">
        <div className="flex gap-x-5 mb-7">
          <img
            className="w-[65px] h-[65px]"
            src={CART_MENU_IMG + shop.cloudinaryImageId}
          ></img>
          <div className="leading-none">
            <h4 className="text-[18px] leading-[21px] font-semibold text-zinc-900 mb-2">
              {shop.name}
            </h4>
            <h5 className="text-gray-500 ">{shop.areaName}</h5>
          </div>
        </div>
      </div>
    );
}

export default CartShop;