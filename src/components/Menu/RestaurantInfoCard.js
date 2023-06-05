import { url } from "../../constant";
import "./RestaurantMenu.css";
import image from "../assest/placeholder-image.jpg";
export const RestaurantInfoCard = ({
  name,
  cloudinaryImageId,
  areaName,
  cuisines,
  sla,
  avgRating,
}) => {
  const hasImage = !!cloudinaryImageId;
  return (
    <div className="restaurant-info-container">
      <div className="restaurant-image-container">
        <img
          src={hasImage ? url + cloudinaryImageId : image}
          className={!hasImage ? "no-image" : ""}
        />
      </div>
      <div className="restaurant-name-container">
        <div>{name}</div>
        <div>{cuisines && cuisines.join(",")}</div>
        <div>
          <div>{areaName}</div>
          <div>{sla && sla.lastMileTravel} Km</div>
        </div>
      </div>
      <div className="restaurant-ratings-container">
        <div>{avgRating} Ratings</div>
      </div>
    </div>
  );
};
