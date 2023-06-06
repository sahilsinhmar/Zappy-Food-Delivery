import { url } from "../../constant";
import "./RestaurantMenu.css";
import image from "../assets/placeholder-image.jpg";

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
      <div className="restaurant-name-container">
        <div className="restaurant-image-container">
          <img
            src={hasImage ? url + cloudinaryImageId : image}
            className={!hasImage ? "no-image" : ""}
          />
        </div>
        <div className="name-info-area-container">
          <div className="name-info-container">
            <div className="name-heading">{name}</div>
            <div className="info-text">{cuisines && cuisines.join(",")}</div>
          </div>
          <div className="area-distance info-text">
            <div>{areaName}</div>
            <div>{sla && sla.lastMileTravel}Km</div>
          </div>
        </div>
      </div>
      <div className="restaurant-ratings-container">
        <div>{avgRating} Ratings</div>
      </div>
    </div>
  );
};
