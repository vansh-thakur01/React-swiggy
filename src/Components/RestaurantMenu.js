import Shimmer from "./Shimmer-ui.js";
import { useParams } from "react-router-dom";
import useRestaurantMenuData from "../config/useRestaurantMenudata.js";
import ResMenuCard from "./ResMenuCards.js";
import { useState } from "react";
import { title } from "process";

const RestaurantMenu = ()=>{   
    const {resid} = useParams();
    const [cardHidden, setcardHidden] = useState("block");
    const resInfo = useRestaurantMenuData(resid);
    if(resInfo === null)  return (
      <div className="mt-4 ml-4">
        <Shimmer />
      </div>
    );

    // const {name,cuisines,costForTwoMessage} = resInfo.cards[2].card.card.info;
    // const { itemCards } = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
    // const { card }= resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card;
    const cardData = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    console.log(cardData,"opop");
    const data =  cardData.filter(val=> val?.card?.card?.itemCards)
    // .forEach((val,i)=>{
    //    const [`cardHidden${}`,setcardHidden] = useState('block');
    //   });
    return (
      <div>
        {data.map(val=>(<div className="w-[1000px] mx-auto">
          <div>
            <h2
              className="text-2xl font-extrabold pt-5"
              onClick={() => {
                cardHidden === "block"
                  ? setcardHidden("hidden")
                  : setcardHidden("block");
              }}
            >
              {val.card.card.title} ({val.card.card.itemCards.length})
            </h2>
            <div className={cardHidden}>
              {val.card.card.itemCards.map((val) => {
                console.log(val);
                return (
                  <div key={val.card.info.id}>
                    <ResMenuCard resdata={val.card.info} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>))}
      </div>
    );
}

export default RestaurantMenu;