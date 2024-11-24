import Shimmer from "./Shimmer-ui.js";
import { useParams } from "react-router-dom";
import useRestaurantMenuData from "../config/useRestaurantMenudata.js";
import ResMenuCard from "./ResMenuCards.js";

const RestaurantMenu = ()=>{   
    const {resid} = useParams();
  
    const resInfo = useRestaurantMenuData(resid);

    if(resInfo === null)  return (
      <div className="mt-4 ml-4">
        <Shimmer />
      </div>
    );

    const {name,cuisines,costForTwoMessage} = resInfo.cards[2].card.card.info;
    const { itemCards } = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
    console.log(itemCards);

    return (
        <div className="w-[800px] mx-auto">
            {/* <h1>{name}</h1>
            <p>{cuisines} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul >
             {itemCards.map((item)=><li key = {item.card.info.id}>{item.card.info.name}</li>)}
            </ul> */}
            {itemCards.map(val=>{
              console.log(val);
              return <div key={val.card.info.id}><ResMenuCard resdata={val.card.info}/></div>
              
              })}
        </div>
    )
}

export default RestaurantMenu;