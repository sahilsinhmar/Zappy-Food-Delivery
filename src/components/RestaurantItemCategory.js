import { MenuItems } from "./MenuItems";
import { MenuDishes } from "./MenuDishes";
import { useState } from "react";
export const RestaurantItemCategory = ({ itemCategory }) => {
  const [isVisible, setVisible] = useState(true);
  const toogleview = () => {
    setVisible(!isVisible);
  };
  return (
    <div>
      <h1 onClick={toogleview}>
        {itemCategory.title} {itemCategory.itemCards.length}
      </h1>
      <div>
        {isVisible &&
          itemCategory.itemCards.map((item, index) => (
            <MenuDishes key={index} item={item.card.info} />
          ))}
      </div>
    </div>
  );
};
