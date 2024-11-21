import { CLOUDNERY_LINK } from "../config/utils.js";

const RestCart = ({ restdata }) => {
  const {
    cloudinaryImageId,
    avgRating,
    cuisines,
    sla: { slaString: time },
    name,
  } = restdata;
  return (
    <div>
      <img
        className="h-[260px] w-[290px] rounded-xl"
        src={CLOUDNERY_LINK + cloudinaryImageId}
      />
      <div>
        <h2 className="font-bold text-xl">{name}</h2>
        <div>
          <h4>{avgRating}</h4>
          <h4>{time}</h4>
        </div>
        <h4>{cuisines.join(",")}</h4>
      </div>
    </div>
  );
};

export default RestCart;
