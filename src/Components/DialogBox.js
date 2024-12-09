import { useContext } from "react";
import { contextForHide } from "../config/userContext.js";

const DialogBox = () => {
    const contextData = useContext(contextForHide);
    console.log(contextData.showDialogBox,"aaaaaaaaaaaaaaaaaaa"); 
  return (
    <div className={contextData.showDialogBox + " shadow-2xl border-2 border-gray-200 bottom-16 bg-white fixed z-10 " }>
      <div className="w-[650px] h-[240px] p-7">
        <h2 className="text-2xl font-semibold mb-2"> Items already in cart</h2>
        <p className="text-slate-600 mb-7">
          Your cart contains items from other restaurant. Would you like to
          reset your cart for adding items from this restaurant ?
        </p>
        <div className="flex gap-4">
            <button className="hover:shadow-md py-4 border-[3px] text-green-600 border-green-600 w-[290px] text-[17px] font-semibold">NO</button>
            <button className="hover:shadow-md py-4 border-[3px] w-[290px] text-[17px] font-semibold  text-white border-green-600 bg-green-600">YES,START AFRESH</button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
