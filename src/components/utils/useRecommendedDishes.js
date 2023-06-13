import { useState, useEffect } from "react";

const useRecommendedDishes = (cards) => {
  const recommendedDishes =
    cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[1]?.card?.card
      ?.itemCards ||
    cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[2]?.card?.card?.itemCards;
  if (recommendedDishes) {
    return recommendedDishes;
  } else {
    return cards[2]?.card?.card?.itemCards || [];
  }
};

export default useRecommendedDishes;
