import { url } from "../../constant";
import "./RestaurantMenu.css";
import image from "../assets/placeholder-image.jpg";

export const Dishescard = ({ name, imageId, price }) => {
  const hasImagee = !!imageId;
  return (
    <div className="dish-container">
      <div className="dish-info-container">
        <div>{name}</div>
        <div>
          {price / 100}
          <span> &#8377;</span>
        </div>
      </div>
      <div className="dish-image-container">
        <img
          src={hasImagee ? url + imageId : image}
          className={!hasImagee ? "no-image" : ""}
        />
        <button className="add-button">ADD</button>
      </div>
    </div>
  );
};
