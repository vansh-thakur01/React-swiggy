import { VegIcon, NonVegIcon } from "../config/utilsIcons/Icons.js";
import { addItemByPlus, removeItem } from "../config/reduxStore/cartSlice.js";
import { useDispatch } from "react-redux";

const CartItem = ({ item, i }) => {
  const dispatch = useDispatch();  
  
  return (
    <div className="flex items-center font-normal justify-between mb-4">
      <div className="flex  gap-3">
        <div className="mt-1.5">
          {item[0].itemAttribute.vegClassifier === "VEG" ? (
            <VegIcon />
          ) : (
            <NonVegIcon />
          )}
        </div>
        <h6 className="w-[150px] line-clamp-1">{item[0].name}</h6>
      </div>
      <div className="flex w-[155px] items-center justify-between">
        <div className="flex gap-1 px-2 py-[5px] border-[2.3px] border-gray-300 w-[92px]">
          <button
            onClick={() => {
              dispatch(removeItem(i));
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="gray"
              className="size-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>
          <div className="text-green-600 font-[640] w-14 flex justify-center items-center">{item.length}</div>
          <button
            onClick={() => {
              dispatch(addItemByPlus(i));
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.9"
              stroke="green"
              class="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
        <div className="text-slate-600 font-[400]">
          ₹{(item[0].price / 100) * item.length}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
