import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { url } from "../../constant";
import { Dishescard } from "./Dishescard";
import { RestaurantInfoCard } from "./RestaurantInfoCard";
import "./RestaurantMenu.css";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useDishes from "../utils/useDishes";

export const RestaurantMenu = () => {
  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);
  const [menuInfo, anotherDishCard] = useDishes(resid);
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
        <div className="menu">
          {anotherDishCard &&
            Object.values(anotherDishCard).map((item) => {
              return <Dishescard {...item.card.info} key={item.card.info.id} />;
            })}
        </div>
      </div>
    </>
  );
};
