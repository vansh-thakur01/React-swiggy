import React, { useEffect } from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { data } from "./config/api-data.js";
import NavBar from "./Components/Nav.js";
import RestCart from "./Components/RestCart.js";
import { CLOUDNERY_LINK } from "./config/utils.js";
import Shimmer from "./Components/Shimmer-ui.js";

  const Body = () => {
  let [foo,setfoo]  = useState([]);
  let [foo2,setfoo2]  = useState([]);
  
  useEffect(()=>{
    fetchData().then((data)=>{
      setfoo(data);
      setfoo2(data);
    });
  },[]);

  const[searchText,setSearchText] = useState('');

  const fetchData = async () =>{
    try{
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&collection=80458&tags=layout_BAU_Contextual%2Classi&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const data = await response.json();
    const dataOfApi = data?.data?.cards?.filter((val,i)=> i>=3)?.map(val => val?.card?.card?.info);
    return dataOfApi;
  }catch(err){
    console.log(err);
  }
  }

  return (
    <div className="main-container">
      <div className="nav-bar">
        <NavBar />
      </div>
      <div className="search">
        <input className="input" type="text" value={searchText} onChange={(e)=>{
          setSearchText(e.target.value);
        }} ></input>
        <button onClick={(e)=>{
          // const cpy = foo;

          const filtered = foo2.filter((val)=> val?.name?.toLowerCase()?.includes(searchText.toLowerCase()));
          filtered.length>0 ? (setfoo(filtered)) : "" 
          setSearchText("");
          // foo="hjvhjv";
          // console.log(foo);
        }}>Button</button>
        {/* <button onClick={()=>{
          const y = foo.filter((val)=> val.avgRating>=4 );
          setfoo(y);
        }}>Sort</button> */}
      </div>
      <div className="res-container">
        { foo.length === 0 ? <Shimmer/> : foo.map((val,i) => (
          <RestCart key={data.restaurants[i].id} restdata={val} />
        ))}
      </div>
    </div>
  );
};



const root = ReactDOM.createRoot(document.querySelector("#hithere"));

root.render(<Body />);
