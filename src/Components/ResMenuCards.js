import { useDispatch, useSelector } from "react-redux";
import { CARD_MENU_IMG } from "../config/utils.js";
import { addItem } from "../config/reduxStore/cartSlice.js";
import { NonVegIcon, VegIcon } from "../config/utilsIcons/Icons.js";
import { useContext } from "react";
import { contextForHide } from "../config/userContext.js";
import { storingCurrentItem,addShop ,removeItem,addItemByPlus} from "../config/reduxStore/cartSlice.js";

const ResMenuCard = function ({resdata}) {
  const contextData = useContext(contextForHide);
  const shop = useSelector(store=> store.cart.shop);
  const items = useSelector(store=>store.cart.items);
  // console.log(shop,"shop");
  const dispatch = useDispatch();
  const handleAddItems = (resdata)=>{
    dispatch(addItem(resdata));
  }

  const itemsNameIndex = items.map(val=>val[0].name).indexOf(resdata.name);
  
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
        <p className="text-[19px] text-gray-500 font-[500] line-clamp-2">
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

        { !(itemsNameIndex !== -1)?<div
        onClick={()=>{
          dispatch(addShop(contextData.currentShop));
          let show = "hidden";
          if (shop.length >= 1 && (contextData.currentShop.name !== shop[0].name)) {
            show = "block";
            dispatch(storingCurrentItem(resdata));
          } else {
            handleAddItems(resdata);
          }
          contextData.setShowDialogbox(show);
          // console.log(contextData.showDialogBox,show, "vvvvv");
          // console.log(shop,'ppppppppp');
        }} 
        className="absolute -bottom-6 -right-[10%] active:scale-[0.98] ease-in text-green-600 text-2xl font-bold bg-slate-50 shadow-lg py-2 px-8 rounded-xl border-solid border-stone-200 border cursor-pointer">
          ADD
        </div> :
        <div className="flex absolute -bottom-6 -right-[10%] ease-in text-green-600 text-2xl font-bold bg-slate-50 shadow-lg py-2 px-3 rounded-xl border-solid border-stone-200 border cursor-pointer gap-2">
            <button
              onClick={() => {
                // console.log(itemsNameIndex);
                dispatch(removeItem(itemsNameIndex));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="gray"
                className="size-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
              </svg>
            </button>
            <div className="text-green-600 font-[640] flex justify-center items-center w-9 transition-transform duration-700">{items.find(val=>val[0].name === resdata.name).length}</div>
            <button
              data-testid="plusButton"
              onClick={() => {
                dispatch(addItemByPlus(itemsNameIndex));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.9"
                stroke="green"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
        </div>}
      </div>
    </div>
  );
};


export default ResMenuCard;