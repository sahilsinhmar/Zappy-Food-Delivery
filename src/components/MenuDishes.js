import { useState } from "react";
import { url } from "../constant";
import image from "./assets/placeholder-image.jpg";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./Cartslice";

export const MenuDishes = ({ item }) => {
  const { id, name, description, price, imageId, defaultPrice } = item;

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
      className=" flex w-full  h-[210px] md:h-[250px]  border-b justify-between p-10 items-center my-4"
      key={id}
    >
      <div className="flex flex-col basis-[400px] md:gap-2 ml-[-10px] py-0">
        <h3 className="font-bold text-sm md:text-2xl w-3/5">{name}</h3>
        <p className="text-sm md:text-xl">
          {price > 0
            ? "₹ " + Math.trunc(item.price / 100)
            : "₹ " + Math.trunc(item.defaultPrice / 100)}
          {""}
        </p>
        <p className="mt-3.5 leading-5 text-gray-desc w-full text-xs md:text-lg h-full mb-[15px]">
          {description?.slice(0, 60)}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-[198px] h-[108px] md:w-[200px] md:h-[200px] relative mr-[-10px]">
        <img
          src={hasImage ? url + imageId : image}
          className="w-full h-full rounded-lg"
        />
        <div className=" flex justify-evenly items-center md:w-[85px] md:h-[30px] w-[65px] h-[25px] mt-0.5 text-gray-count outline-none border bg-green-500 border-gray absolute bottom-1 text-white rounded-lg border-gray">
          <button
            className="text-2xl text-gray-count font-semibold"
            onClick={() => handleRemoveItem(id)}
          >
            {" "}
            -{" "}
          </button>
          <span className="text-base text-green"> {itemCount} </span>
          <button
            className="text-green text-2xl"
            onClick={() => handleAddItem(item)}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
