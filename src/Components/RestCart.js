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
        <div className="res-cart">
      <img
        src={(CLOUDNERY_LINK + cloudinaryImageId)}
      />
      <div className="cart-info">
        <h2>{name}</h2>
        <div className="div-in-div">
          <h4>{avgRating}</h4>
          <h4>{time}</h4>
        </div>
        <h4>{cuisines.join(",")}</h4>
      </div>
    </div>
  );
};

export default RestCart;