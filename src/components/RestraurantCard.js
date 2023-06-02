import { url } from "../constant";

export const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  totalRatingsString,
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={url + cloudinaryImageId} />
      </div>
      <div className="cardinfo">
        <div className="restro-name">
          <span>{name}</span>
        </div>
        <div className="restro-type">
          <div>{cuisines.slice(0, 2).join(",")}</div>
          <div>{totalRatingsString}</div>
        </div>
      </div>
    </div>
  );
};
