import { CARD_MENU_IMG } from "../config/utils.js";

const ResMenuCard = function ({resdata}) {
  console.log(resdata,"ssssss");
  return (
    <div className="flex justify-between items-center h-[225px] w-[1100px] mb py-4 border-b-2 border-gray-300">
      <div className="h-[165px] w-[690px] ">
        <h4>{resdata?.isVeg ? "🟢" : "🔴"}</h4>
        <h2 className="text-2xl font-bold">{resdata.name}</h2>
        <h4 className="text-xl font-bold"> ₹ {resdata.price / 100}</h4>
        <h4 className="my-2 text-[17px] font-bold">
          <span className="text-green-500">
            {resdata.ratings.aggregatedRating.rating}
          </span>
        </h4>
        <p className="text-[19px] text-gray-500 font-[500]">
          {resdata.description}
        </p>
      </div>
      <div>
        {resdata.showImage ? (<img
          className="w-[220px] h-[180px] rounded-3xl "
          src={CARD_MENU_IMG + resdata.imageId}
          alt="img"
        />) : <div></div>}
      </div>
    </div>
  );
};


export default ResMenuCard;