import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./Cartslice";

const ItemQuantity = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between w-[70px] border  items-center rounded-md px-2 text-green-700">
      <button
        className="text-xl"
        onClick={() => {
          dispatch(removeItem(item.id));
        }}
      >
        -
      </button>
      <p className="text-lg">{item.quantity}</p>
      <button
        className="text-xl"
        onClick={() => {
          dispatch(addItem(item));
        }}
      >
        +
      </button>
    </div>
  );
};

export default ItemQuantity;
