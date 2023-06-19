import { RestaurantItemCategory } from "./RestaurantItemCategory";
import { useState } from "react";

export const RestaurantNestedItemCategory = ({ nestedCategory }) => {
  const [isVisible, setVisible] = useState(true);
  const toogleview = () => {
    setVisible(!isVisible);
  };
  return (
    <div>
      <h1>{console.log(nestedCategory)}</h1>
      <h1 onClick={toogleview}>{nestedCategory.title}</h1>
      <div>
        {nestedCategory.categories?.map((category, index) => {
          return (
            <div key={index}>
              <RestaurantItemCategory itemCategory={category} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
