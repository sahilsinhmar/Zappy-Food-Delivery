const useAnotherDishCards = (cards) => {
  const cardDishes =
    cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[2]?.card?.card
      ?.itemCards ||
    cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[3]?.card?.card?.itemCards;
  if (cardDishes) {
    return cardDishes;
  } else {
    return cards[2]?.card?.card?.itemCards || [];
  }
};

export default useAnotherDishCards;
