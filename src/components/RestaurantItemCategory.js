import { MenuItems } from "./MenuItems";
import { MenuDishes } from "./MenuDishes";
import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

export const RestaurantItemCategory = ({ itemCategory }) => {
  const [isVisible, setVisible] = useState(true);

  const toggleview = () => {
    setVisible(!isVisible);
  };

  return (
    <div className="w-full md:w-[800px] h-full border-t-[12px] mb-6">
      <div className="flex items-center justify-between my-4">
        <h3
          className="font-bold text-lg text-gray-600 cursor-pointer"
          onClick={toggleview}
        >
          {itemCategory.title} ({itemCategory.itemCards.length})
        </h3>
        {isVisible ? (
          <SlArrowUp onClick={toggleview} className="cursor-pointer" />
        ) : (
          <SlArrowDown onClick={toggleview} className="cursor-pointer" />
        )}
      </div>

      {isVisible && (
        <div className="flex flex-col justify-evenly items-center ">
          {itemCategory.itemCards.map((item, index) => (
            <MenuDishes key={index} item={item.card.info} />
          ))}
        </div>
      )}
    </div>
  );
};
