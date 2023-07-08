import { useState } from "react";
import { url } from "../constant";
import image from "./assets/placeholder-image.jpg";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./Cartslice";

export const MenuDishes = ({ item }) => {
  const { id, name, description, price, imageId } = item;

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
      className="flex w-full basis-[848px] max-h-[180px] h-40 border-b justify-between p-10"
      key={id}
    >
      <div className="flex flex-col basis-[400px]">
        <h3 className="font-bold text-lg w-3/5">{name}</h3>
        <p>{price > 0 ? "₹ " + item.price / 100 : " "} </p>
        <p className="mt-3.5 leading-5 text-gray-desc w-4/5 text-base  ">
          {description?.slice(0, 50)}...
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-[118px] h-[150px] relative">
        <img
          src={hasImage ? url + imageId : image}
          className="w-[118px] h-[96px]"
        />
        <div className=" flex justify-evenly items-center w-[85px] h-[30px] mt-0.5 text-gray-count outline-none border bg-green-500 border-gray absolute bottom-4 text-white">
          <button
            className="text-xl text-gray-count font-semibold"
            onClick={() => handleRemoveItem(id)}
          >
            {" "}
            -{" "}
          </button>
          <span className="text-base text-green"> {itemCount} </span>
          <button
            className="text-green text-xl"
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
