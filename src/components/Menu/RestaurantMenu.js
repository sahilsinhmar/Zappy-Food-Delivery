import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { url } from "../../constant";
import { Dishescard } from "./Dishescard";
import { RestaurantInfoCard } from "./RestaurantInfoCard";
import "./RestaurantMenu.css";

export const RestaurantMenu = () => {
  const { id } = useParams();

  const [resInfo, setResInfo] = useState([]);
  const [menuInfo, setMenuIfo] = useState([]);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4089123&lng=77.3177894&restaurantId=" +
        id
    );
    const json = await data.json();
    const restInfo = json.data.cards[0].card.card.info;
    const menu = getMenuFromData(json.data.cards);
    setResInfo(restInfo);
    setMenuIfo(menu || []);
  }
  function getMenuFromData(cards) {
    const recommendedDishes =
      cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[1]?.card?.card
        ?.itemCards ||
      cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[2]?.card?.card
        ?.itemCards;
    if (recommendedDishes) {
      return recommendedDishes;
    } else {
      return cards[2]?.card?.card?.itemCards || [];
    }
  }
  return (
    <>
      <div className="menu-container">
        <RestaurantInfoCard {...resInfo} />
        <div className="menu">
          {menuInfo &&
            Object.values(menuInfo).map((item) => {
              return <Dishescard {...item.card.info} key={item.card.info.id} />;
            })}
        </div>
      </div>
    </>
  );
};
