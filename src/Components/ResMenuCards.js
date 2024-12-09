import { useDispatch, useSelector } from "react-redux";
import { CARD_MENU_IMG } from "../config/utils.js";
import { addItem } from "../config/reduxStore/cartSlice.js";
import { NonVegIcon, VegIcon } from "../config/utilsIcons/Icons.js";
import { useContext } from "react";
import { contextForHide } from "../config/userContext.js";

const ResMenuCard = function ({resdata}) {
  const contextData = useContext(contextForHide);
  const shop = useSelector(store=> store.cart.shop);
  const dispatch = useDispatch();
  const handleAddItems = (resdata)=>{
    dispatch(addItem(resdata));
  }


  // console.log(resdata,"resdata");
  return (
    <div className="flex justify-between items-center h-[225px] w-[1100px] mb-7 pb-16 py-4 border-b-2 border-gray-300">
      <div className="h-[165px] w-[690px] mb-4">
        <h4>{resdata?.isVeg ? <VegIcon/> : <NonVegIcon/>}</h4>
        <h2 className="text-2xl font-bold">{resdata.name}</h2>
        <h4 className="text-xl font-bold"> ₹ {resdata.price / 100}</h4>
        <h4 className="my-2 text-[17px] font-bold">
          <span className="text-green-500">
            {resdata.ratings.aggregatedRating.rating}
          </span>
        </h4>
        <p className="text-[19px] text-gray-500 font-[500]">
          {resdata.description}
        </p>
      </div>
      <div className="relative mr-5">
        {resdata.showImage ? (
          <img
            className="w-[220px] h-[180px] rounded-3xl"
            src={CARD_MENU_IMG + resdata.imageId}
            alt="img"
          />
        ) : (
          <div></div>
        )}
        <div
        onClick={()=>{
           const show = contextData.showDialogBox !== "hidden" ? "hidden" : "block";
          console.log(contextData.showDialogBox,show, "vvvvv");
           contextData.setShowDialogbox(show)
           handleAddItems(resdata)
          }} 
        className="absolute -bottom-6 -right-[10%] active:scale-[0.98] ease-in text-green-600 text-2xl font-bold bg-slate-50 shadow-lg py-2 px-8 rounded-xl border-solid border-stone-200 border cursor-pointer">
          ADD
        </div>
      </div>
    </div>
  );
};


export default ResMenuCard;