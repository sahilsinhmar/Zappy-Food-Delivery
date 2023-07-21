import { useParams } from "react-router-dom";
import { FETCH_API_URL } from "./utils/helper";
import useRestaurant from "./utils/useRestaurant";
import { RestaurantInfo } from "./RestaurantInfo";
import { MenuItems } from "./MenuItems";
import { SkeletonImage } from "./skeletons/skeletonImage";

export const RestaurantMenu = () => {
  const { resid } = useParams();
  const restaurant = useRestaurant(resid);

  if (!restaurant) return <SkeletonImage />;
  return (
    <div className=" w-full">
      <RestaurantInfo {...restaurant?.info} />
      <MenuItems menu={restaurant?.menu} />
    </div>
  );
};
