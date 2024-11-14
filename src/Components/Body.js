import React, { useEffect, useState} from "react";
import { data } from "../config/api-data.js";
import RestCart from "./RestCart.js";
import Shimmer from "./Shimmer-ui.js";
import { SWIGGY_CDN_LINK } from "../config/utils.js";
import  {Link} from "react-router-dom";

const Body = () => {
  let [foo, setfoo] = useState([]);
  let [foo2, setfoo2] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setfoo(data);
      setfoo2(data);
    });
  }, []);

  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_CDN_LINK);
      const data = await response.json();
    //   console.log(data);
      // const dataOfApi = data?.data?.cards?.filter((val,i)=> i>=3)?.map(val => val?.card?.card?.info);
      const dataOfApi =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
          ?.map((val) => val.info)
          .reverse();
      console.log(dataOfApi);
      return dataOfApi;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="search">
        <input
          className="input"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          onClick={(e) => {
            // const cpy = foo;

            const filtered = foo2.filter((val) =>
              val?.name?.toLowerCase()?.includes(searchText.toLowerCase())
            );
            filtered.length > 0 ? setfoo(filtered) : "";
            setSearchText("");
            // foo="hjvhjv";
            // console.log(foo);
          }}
        >
          Button
        </button>
        {/* <button onClick={()=>{
          const y = foo.filter((val)=> val.avgRating>=4 );
          setfoo(y);
        }}>Sort</button> */}
      </div>
      <div className="res-container">
        {foo.length === 0 ? (
          <Shimmer />
        ) : (
          foo.map((val, i) => (
            <Link key={data.restaurants[i].id} to={"/restaurant/" + data.restaurants[i].id}>
              <RestCart restdata={val} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
