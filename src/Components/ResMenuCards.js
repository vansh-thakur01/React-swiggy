import { MENU_IMG } from "../config/utils.js";

const ResMenuCard = function ({resdata}) {
  const  a = resdata;
  console.log(a,"sdsdgdsdgds");
  return (
    <div className="flex items-center h-[200px] w-[850px] my-6 border-t-2 border-gray-300">
      <div className="h-[165px] w-[580px]">
        <h4>🟢</h4>
        <h2 className="text-2xl font-bold">{resdata.name}</h2>
        <h4 className="text-xl font-bold"> ₹ {resdata.price / 100}</h4>
        <h4 className="my-2 text-[17px] font-bold">
          <span className="text-green-500">{resdata.ratings.aggregatedRating.rating}</span>
        </h4>
        <p className="text-[18px] text-gray-500 font-[500]">{resdata.description}</p>
      </div>
      <div>
        <img
          className="w-[180px] h-[170px] rounded-lg"
          src={
            MENU_IMG +
            resdata.imageId
          }
          alt="img"
        />
      </div>
    </div>
  );
};

export default ResMenuCard;