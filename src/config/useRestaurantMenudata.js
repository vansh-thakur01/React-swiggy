import { useState, useEffect } from "react";
import { MENU_API } from "./utils";

const useRestaurantMenuData  = (resId)=>{
    const [resInfo,setResInfo] = useState(null);
    
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async (resId)=>{
        const response = await fetch(MENU_API + resId);
        const data = await response.json();
        setResId(data.data);
    }

    return resInfo;
}

export default useRestaurantMenuData;