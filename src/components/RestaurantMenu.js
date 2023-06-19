import { useParams } from "react-router";
import { FETCH_API_URL } from "./utils/helper";
import useRestaurant from "./utils/useRestaurant";
import { RestaurantInfo } from "./RestaurantInfo";
import { MenuItems } from "./MenuItems";

export const RestaurantMenu = () => {
  const { resid } = useParams();
  const restaurant = useRestaurant(resid);
  return (
    <div>
      <RestaurantInfo {...restaurant?.info} />
      <MenuItems menu={restaurant?.menu} />
    </div>
  );
};
