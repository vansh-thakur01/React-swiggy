import ShimmerMenu from "./ShimmerMenu.js";
import { useParams } from "react-router-dom";
import useRestaurantMenuData from "../config/useRestaurantMenudata.js";
import ResMenuCard from "./ResMenuCards.js";
import { useState } from "react";
import Accordion from "./Accordion.js";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const resInfo = useRestaurantMenuData(resid);
  const [cardHiddenArr, setcardHidden] = useState([]);
  const [accordionShow,setAccordionShow] = useState([1,1]);

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
  return (
    <div className="w-[1100px] mx-auto">
      <h1 className="text-4xl bg-slate-900 text-slate-200 p-2 font-extrabold text-center my-4 mt-6">{resInfo.cards[0].card.card.text}</h1>
      {data?.map((val, i) => {
        const { card } = val?.card;
        return (
          <div>
            <Accordion card={card} cardHiddenArr={cardHiddenArr} i={i} setcardHidden={setcardHidden} stateViaProps={(i!==accordionShow)? false : true} whichAccotdionToOpne={(repeatClickOnSameAccord)=>{
              let whichAccordionToOpen;
              repeatClickOnSameAccord ? (whichAccordionToOpen=null): (whichAccordionToOpen=i); 
              return setAccordionShow(whichAccordionToOpen)}}/>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
