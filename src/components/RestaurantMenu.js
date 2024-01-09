import { useParams } from "react-router-dom";
import { FETCH_API_URL } from "./utils/helper";
import useRestaurant from "./utils/useRestaurant";
import { RestaurantInfo } from "./RestaurantInfo";
import { MenuItems } from "./MenuItems";
import { SkeletonImage } from "./skeletons/skeletonImage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addInfo } from "./ResInfoSlice";

export const RestaurantMenu = () => {
  const { resid } = useParams();
  const restaurant = useRestaurant(resid);
  const restaurantData = restaurant?.info;
  

  
  if (!restaurant) return <SkeletonImage />;
  return (
    <div className=" w-full md:w-[800px] mt-16">
      <RestaurantInfo restaurantInfo={restaurantData} />
      <MenuItems menu={restaurant?.menu} />
    </div>
  );
};
