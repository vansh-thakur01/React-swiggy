import { useContext } from "react";
import { contextForHide } from "../config/userContext.js";
import { useSelector ,useDispatch} from "react-redux";
import { addItem, addShop, removeAllItems,removeShop } from "../config/reduxStore/cartSlice.js";

const DialogBox = () => {
    const dispatch = useDispatch();
    const storeCurrentItem = useSelector((store)=>store.cart.currentItem);
    const storeShop = useSelector((store)=>store.cart.shop[1]);
    console.log(storeCurrentItem,"zzzzzzzzzzzzzzzzz");
    const contextData = useContext(contextForHide);
    console.log(contextData.showDialogBox,"aaaaaaaaaaaaaaaaaaa"); 
  return (
    <div className={contextData.showDialogBox}>
    <div onClick={()=> contextData.setShowDialogbox("hidden")} className={ "bg-opacity-0	 fixed w-screen h-screen flex justify-center items-center z-20"}>
      <div onClick={(e) => e.stopPropagation()} className={"shadow-2xl border-2 border-gray-200 bottom-16 bg-white fixed opacity-100 "}>
        <div className="w-[650px] h-[240px] p-7">
          <h2 className="text-2xl font-semibold mb-2"> Items already in cart</h2>
          <p className="text-slate-600 mb-7">
            Your cart contains items from other restaurant. Would you like to
            reset your cart for adding items from this restaurant ?
          </p>
          <div className="flex gap-4">
              <button onClick={()=>contextData.setShowDialogbox("hidden")} className="hover:shadow-md py-4 border-[3px] text-green-600 border-green-600 w-[290px] text-[17px] font-semibold">NO</button>
              <button onClick={()=>{
                dispatch(removeAllItems());
                dispatch(addItem(storeCurrentItem));
                dispatch(removeShop());
                dispatch(addShop(storeShop));

                contextData.setShowDialogbox("hidden");
              }} className="hover:shadow-md py-4 border-[3px] w-[290px] text-[17px] font-semibold  text-white border-green-600 bg-green-600">YES,START AFRESH</button>
          </div>
        </div>
      </div>
    </div>

    </div>);
};

export default DialogBox;
