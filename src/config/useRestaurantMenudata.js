import { useState, useEffect } from "react";
import { MENU_API } from "./utils";

const useRestaurantMenuData  = (resId)=>{
    const [resInfo,setResInfo] = useState(null);
    
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const response = await fetch(MENU_API + resId);
        const data = await response.json();
        setResInfo(data.data);
    }

    // fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-opacity-50 bg-gray-800 z-10

    return resInfo;
}

export default useRestaurantMenuData;