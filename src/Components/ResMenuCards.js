import { MENU_IMG } from "../config/utils.js";

const ResMenuCard = function ({resdata}) {
  return (
    <div className="flex justify-between items-center h-[225px] w-[1100px] my-6 py-4 border-t-2 border-gray-300">
      <div className="h-[165px] w-[690px] ">
        <h4>🟢</h4>
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
        <img
          className="w-[220px] h-[180px] rounded-3xl "
          src={MENU_IMG + resdata.imageId}
          alt="img"
        />
      </div>
    </div>
  );
};

export default ResMenuCard;