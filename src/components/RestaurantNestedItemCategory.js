import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { RestaurantItemCategory } from "./RestaurantItemCategory";
import { useState } from "react";

export const RestaurantNestedItemCategory = ({ nestedCategory }) => {
  const [isVisible, setVisible] = useState(true);

  const toggleView = () => {
    setVisible(!isVisible);
  };
  return (
    <div className="border-t-2">
      <div className="flex items-center justify-between ">
        <h3 className="font-bold text-lg cursor-pointer" onClick={toggleView}>
          {nestedCategory.title}
        </h3>
        {isVisible ? (
          <SlArrowUp onClick={toggleView} className="cursor-pointer" />
        ) : (
          <SlArrowDown onClick={toggleView} className="cursor-pointer" />
        )}
      </div>
      {isVisible && (
        <div>
          {nestedCategory.categories.map((category, index) => (
            <div key={index}>
              <RestaurantItemCategory itemCategory={category} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
