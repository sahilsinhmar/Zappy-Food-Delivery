import { useState, useEffect } from "react";
import useRecommendedDishes from "./useRecommendedDishes";
import { FETCH_API_URL } from "./helper";
import useAnotherDishCards from "./useAnotherDishCards";

const useDishes = (resid) => {
  const [recommendedDish, setRecommendedDish] = useState([]);
  const [anotherDishCard, setAnotherDishCard] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const menuInfo = async () => {
      try {
        const data = await fetch(FETCH_API_URL + resid, {
          signal: controller.signal,
        });
        const json = await data.json();
        const recommendedDishCard = useRecommendedDishes(json.data.cards);
        const dishCard = useAnotherDishCards(json.data.cards);
        setRecommendedDish(recommendedDishCard || []);
        setAnotherDishCard(dishCard || []);
      } catch (error) {
        console.log("error", error);
      }
    };
    menuInfo();
    return () => {
      controller.abort();
    };
  }, []);
  return [recommendedDish, anotherDishCard];
};

export default useDishes;
