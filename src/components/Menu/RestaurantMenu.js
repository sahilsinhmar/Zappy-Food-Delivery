import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { url } from "../../constant";
import { Dishescard } from "./Dishescard";
import { RestaurantInfoCard } from "./RestaurantInfoCard";
import "./RestaurantMenu.css";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import useDishes from "../utils/useDishes";
import { Recommended } from "./dishescard/recommended";

export const RestaurantMenu = () => {
  const [visibleSection, setVisibleSection] = useState("recommended");
  const { resid } = useParams();
  const resInfo = useRestaurantInfo(resid);
  const [anotherDishCard] = useDishes(resid);
  return (
    <>
      <div className="menu-container">
        <RestaurantInfoCard {...resInfo} />
        <Recommended
          title={"Recommended"}
          isVisible={visibleSection === "recommended"}
          setVisible={() =>
            setVisibleSection(
              visibleSection === "recommended" ? "" : "recommended"
            )
          }
        />
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
