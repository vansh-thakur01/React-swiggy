import ShimmerMenu from "./ShimmerMenu.js";
import { useParams } from "react-router-dom";
import useRestaurantMenuData from "../config/useRestaurantMenudata.js";
import ResMenuCard from "./ResMenuCards.js";
import { useContext, useState} from "react";
import Accordion from "./Accordion.js";
import { useDispatch } from "react-redux";
import { addShop,removeShop} from "../config/reduxStore/cartSlice.js"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5046f2c (working on ep12)
import DialogBox from "./DialogBox.js";
import { contextForHide } from "../config/userContext.js";


<<<<<<< HEAD
=======
>>>>>>> 371fecf (working on 12ep)
=======
>>>>>>> 5046f2c (working on ep12)
const RestaurantMenu = () => {
  const { resid } = useParams();
  const resInfo = useRestaurantMenuData(resid);
  const [cardHiddenArr, setcardHidden] = useState([]);
  const [accordionShow,setAccordionShow] = useState([1,1]);
<<<<<<< HEAD
<<<<<<< HEAD
  const [showDialogBox,setShowDialogBox] = useState("hidden");
  // console.log(showDialogBox);
=======
>>>>>>> 371fecf (working on 12ep)
=======
  const [showDialogBox,setShowDialogBox] = useState("hidden");
  console.log(showDialogBox);
>>>>>>> 5046f2c (working on ep12)
  const dispatch = useDispatch();

  if (resInfo === null)
    return (
      <div className="w-[1100px] mx-auto">
        <div className="w-[1100px] h-[59px] bg-slate-200 my-7 mt-6"></div>
        <div className="w-[290px] h-[27px] bg-slate-200 my-9"></div>
        {Array(5)
          ?.fill(0)
          ?.map((_) => (
            <ShimmerMenu />
          ))}
      </div>
    );
    
  const cardData = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const data = cardData.filter(
    (val) =>
      val?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  const cardArr = data.map((val) => val?.card?.card?.title);
  cardHiddenArr.length <= 0 ? setcardHidden(cardArr) : "";
<<<<<<< HEAD
  // console.log(resInfo.cards[2].card.card.info,"sadddddddddddddddddddddddddddddddddddddddd");
  // dispatch(addShop(resInfo.cards[2].card.card.info));
=======
  console.log(resInfo.cards[2].card.card.info,"sadddddddddddddddddddddddddddddddddddddddd");
<<<<<<< HEAD
  dispatch(addShop(resInfo.cards[2].card.card.info));
>>>>>>> 371fecf (working on 12ep)

  return (
<<<<<<< HEAD
=======
  // dispatch(addShop(resInfo.cards[2].card.card.info));

  return (
>>>>>>> f510b87 (working on ep 12 still)
    <contextForHide.Provider value={{showDialogBox:showDialogBox,setShowDialogbox:setShowDialogBox,currentShop:resInfo.cards[2].card.card.info}}>
      <div>
        <DialogBox />
      </div>
      <div className="w-[1100px] mx-auto">
<<<<<<< HEAD
=======
    <contextForHide.Provider value={{showDialogBox:showDialogBox,setShowDialogbox:setShowDialogBox}}>
      <div className="w-[1100px] mx-auto ">
        <div onClick={console.log("hi")} className={"flex items-center justify-center z-13 bg-slate-400 "}>
          <DialogBox />
        </div>
>>>>>>> 5046f2c (working on ep12)
=======
>>>>>>> f510b87 (working on ep 12 still)
        <h1 className="text-4xl bg-slate-900 text-slate-200 p-2 font-extrabold text-center my-4 mt-6">
          {resInfo.cards[0].card.card.text}
        </h1>
        {data?.map((val, i) => {
          const { card } = val?.card;
          return (
            <div>
              <Accordion
                card={card}
                cardHiddenArr={cardHiddenArr}
                i={i}
                setcardHidden={setcardHidden}
                stateViaProps={i !== accordionShow ? false : true}
                whichAccotdionToOpne={(repeatClickOnSameAccord) => {
                  let whichAccordionToOpen;
                  repeatClickOnSameAccord
                    ? (whichAccordionToOpen = null)
                    : (whichAccordionToOpen = i);
                  return setAccordionShow(whichAccordionToOpen);
                }}
              />
            </div>
          );
        })}
      </div>
    </contextForHide.Provider>
  );
};

export default RestaurantMenu;
