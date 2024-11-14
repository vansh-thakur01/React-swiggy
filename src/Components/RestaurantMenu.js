import { useEffect,useState } from "react";
import Shimmer from "./Shimmer-ui";
import { useParams } from "react-router-dom";
import { MENU_API } from "../config/utils";

const RestaurantMenu = ()=>{
    const [resInfo,setResInfo] = useState(null);
    
    const {resid} = useParams();
    console.log(resid);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const response = await fetch(
          MENU_API + resid
        );
        const data = await response.json();
        // console.log(data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards);
        setResInfo(data.data);
    }

    if(resInfo === null)  return <Shimmer/>

    // console.log(resInfo.cards[2].card.card.info);
    const {name,cuisines,costForTwoMessage} = resInfo.cards[2].card.card.info;
    const { itemCards } = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card
    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
             {itemCards.map((item)=><li key = {item.card.info.id}>{item.card.info.name}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;