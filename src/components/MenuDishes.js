import { useState } from "react";
import { url } from "../constant";
import image from "./assets/placeholder-image.jpg";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./Cartslice";
import Veg from "./assets/veg.png";
import Non from "./assets/non.png";

export const MenuDishes = ({ item,restaur }) => {
  const { id, name, description, price, imageId, defaultPrice, isVeg } = item;

  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(0);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    setItemCount(itemCount + 1);
  };
  const handleRemoveItem = (id) => {
    let updatedCount;
    dispatch(removeItem(id));
    updatedCount = itemCount > 0 ? itemCount - 1 : 0;
    setItemCount(updatedCount);
  };

  const hasImage = !!imageId;
  return (
    <div
      className=" flex w-full md:max-w-[800px] h-[180px]  border-b justify-between p-10 items-center my-4  "
      key={id}
    >
      <div className="flex flex-col  ">
        {isVeg == 1 ? (
          <img src={Veg} className="w-5 h-5" />
        ) : (
          <img src={Non} className="w-5 h-5" />
        )}
        <h3 className="font-semibold text-gray-700 text-sm md:text-lg ">
          {name}
        </h3>
        <p className="text-sm md:text-sm">
          {price > 0
            ? "₹ " + Math.trunc(item.price / 100)
            : "₹ " + Math.trunc(item.defaultPrice / 100)}
          {""}
        </p>
        <p className="mt-3.5 leading-5 text-gray-500  w-full text-xs md:text-sm h-full mb-[15px]">
          {description?.slice(0, 60)}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-[198px] h-[108px] md:w-[200px] md:h-[200px] relative mr-[-10px]">
        <div className="w-full md:w-[130px] h-[110px] relative">
          <img
            src={hasImage ? url + imageId : image}
            className="h-full w-full object-cover rounded-2xl "
          />
          <div className=" flex justify-evenly items-center w-full h-[30px] md:w-[85px]  text-gray-count outline-none border bg-white border-gray absolute  text-white rounded-lg border-gray bottom-0 xs:right-0 md:left-6">
            <button
              className="text-2xl text-green-500 font-semibold"
              onClick={() => handleRemoveItem(id)}
            >
              {" "}
              -{" "}
            </button>
            <span className="text-lg text-green-500"> {itemCount} </span>
            <button
              className="text-green-500 text-2xl text-center"
              onClick={() => handleAddItem(item)}
            >
              {" "}
              +{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
