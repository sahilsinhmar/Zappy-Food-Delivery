import { RestaurantItemCategory } from "./RestaurantItemCategory";
import { RestaurantNestedItemCategory } from "./RestaurantNestedItemCategory";

export const MenuItems = ({ menu }) => {
  return (
    <div>
      {menu?.map((item, index) => (
        <div key={index}>
          {item.categories ? (
            <RestaurantNestedItemCategory nestedCategory={item} />
          ) : (
            <RestaurantItemCategory itemCategory={item} />
          )}
        </div>
      ))}
    </div>
  );
};
