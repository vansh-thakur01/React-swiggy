import React, { useEffect, useState } from "react";
import RestCart from "./RestCart.js";
import Shimmer from "./Shimmer-ui.js";
import { SWIGGY_CDN_LINK } from "../config/utils.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../config/useOnlineStatus.js";

const Body = () => {
  let [foo, setfoo] = useState([]);
  let [foo2, setfoo2] = useState([]);
  const online = useOnlineStatus();

  useEffect(() => {
    online &&
      fetchData()?.then((data) => {
        setfoo(data);
        setfoo2(data);
      });
  }, []);

  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_CDN_LINK);
      const data = await response.json();
      console.log(data);
      let dataInThisIndex;
      data.data.cards.forEach(
        (val, i) => val?.card?.card?.gridElements && (dataInThisIndex = i)
      );
      const dataOfApi = data?.data?.cards[
        dataInThisIndex
      ]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (val) => val.info
      );
      return dataOfApi;
    } catch (err) {
      console.log(err);
    }
  };

  if (!online) return <h1>Not online</h1>;

  return (
    <div className="w-[1200px] mx-auto">
      <div className="m-5">
        <input
          className="w-[92%] p-1.5 border-solid border-r-transparent border-2 border-black "
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className=" bg-slate-700 text-zinc-200 p-2 px-3 font-semibold rounded-e-2xl"
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
      <div>
        {foo.length === 0 ? (
          <div className="[&>div]: [&>div]: grid grid-cols-4 gap-6">
            {new Array(8).fill(null).map((_, i) => (
              <Shimmer key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-3">
            {foo.map((val) => (
              <Link
                className="hover:scale-[0.96] ease-in duration-200"
                key={val.id}
                to={"/restaurant/" + val.id}
              >
                <RestCart restdata={val} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;

