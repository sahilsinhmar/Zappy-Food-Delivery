import { useState, useEffect } from "react";
import { FETCH_API_URL } from "./helper";
const useRestaurantMenu = (resid) => {
  const [restaurantInfo, setRestaurantInfo] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const getRestaurantMenu = async () => {
      try {
        const data = await fetch(FETCH_API_URL + resid, {
          signal: controller.signal,
        });
        const json = await data.json();
        const restInfo = json.data.cards[0].card.card.info;

        setRestaurantInfo(restInfo);
      } catch (error) {
        console.log("error", error);
      }
    };

    getRestaurantMenu();
    return () => {
      controller.abort();
    };
  }, []);
  return restaurantInfo;
};

export default useRestaurantMenu;
