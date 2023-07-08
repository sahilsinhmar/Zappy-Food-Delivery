import { RestaurantItemCategory } from "./RestaurantItemCategory";
import { RestaurantNestedItemCategory } from "./RestaurantNestedItemCategory";

export const MenuItems = ({ menu }) => {
  return (
    <div className="flex justify-center sm:flex-col xsm:flex-col mob:flex-col">
      <div className="mt-7 xl:w-[70%] lg:w-[70%] md:w-[70%] card-container">
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
    </div>
  );
};
