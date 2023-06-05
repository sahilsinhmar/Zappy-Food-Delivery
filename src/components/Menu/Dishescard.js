import { url } from "../../constant";
import "./RestaurantMenu.css";
import image from "../assest/placeholder-image.jpg";

export const Dishescard = ({ name, imageId, price }) => {
  const hasImagee = !!imageId;
  return (
    <div>
      <img
        src={hasImagee ? url + imageId : image}
        className={!hasImagee ? "no-image" : ""}
      />
      <h1>{name}</h1>
      <h1>
        {price / 100}
        <span> &#8377;</span>
      </h1>
    </div>
  );
};
