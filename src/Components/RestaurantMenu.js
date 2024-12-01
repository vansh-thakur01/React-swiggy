import ShimmerMenu from "./ShimmerMenu.js";
import { useParams } from "react-router-dom";
import useRestaurantMenuData from "../config/useRestaurantMenudata.js";
import ResMenuCard from "./ResMenuCards.js";
import { useState } from "react";


const RestaurantMenu = ()=>{   
    const {resid} = useParams();
    const resInfo = useRestaurantMenuData(resid);
    const [cardHiddenArr, setcardHidden] = useState([]);

    if(resInfo === null)  return (
      <div className="w-[1000px] mx-auto">
        <div className="w-[290px] h-[27px] bg-slate-200 my-6"></div>
        {Array(5).fill(0).map(val => <ShimmerMenu />)}
      </div>
    );

    const cardData = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
    const data =  cardData.filter(val=> val?.card?.card?.itemCards)
    const cardArr = data.map((val) => val?.card?.card?.title);
    cardHiddenArr.length <= 0 ? setcardHidden(cardArr):"";
    console.log(cardData);
    return (
      <div>
        {data.map((val, i) => {
          const { card } = val.card;
          return (
            <div className="w-[1100px] mx-auto">
              <div className="mb-2 ">
                <h2
                  className="text-2xl font-extrabold pt-5 p-6 flex justify-between align-middle "
                  onClick={() => {
                    const cardArr = [...cardHiddenArr];
                    cardArr[i] =
                      cardArr[i] === "hidden" ? card.title : "hidden";
                    setcardHidden(cardArr);
                  }}
                >
                  <div>
                    {card.title} ({card.itemCards.length})
                  </div>
                  <div>
                    {cardHiddenArr[i] === "hidden" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.6"
                        stroke="currentColor"
                        className="size-8"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.6"
                        stroke="currentColor"
                        class="size-8"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m4.5 15.75 7.5-7.5 7.5 7.5"
                        />
                      </svg>
                    )}
                  </div>
                </h2>
                <div className={cardHiddenArr[i]}>
                  {card.itemCards.map((val) => {
                    return (
                      <div key={val.card.info.id}>
                  <ResMenuCard resdata={val.card.info} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );})}
      </div>
    );
}

export default RestaurantMenu;