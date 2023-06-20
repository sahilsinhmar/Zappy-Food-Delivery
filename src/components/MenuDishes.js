import { useState } from "react";
import { url } from "../constant";
import image from "./assets/placeholder-image.jpg";
import { useDispatch } from "react-redux";
import { addItem } from "./Cartslice";

export const MenuDishes = ({ item }) => {
  const { id, name, description, price, imageId } = item;

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  const hasImage = !!imageId;
  return (
    <div className="border">
      <div className="dish-info-container">
        <div>{name}</div>
        <div>
          {price / 100}
          <span> &#8377;</span>
        </div>
      </div>
      <div className="dish-image-container">
        <img
          src={hasImage ? url + imageId : image}
          className={!hasImage ? "no-image" : ""}
        />
        <button
          onClick={() => {
            addFoodItem(item);
          }}
          className="add-button"
        >
          ADD
        </button>
      </div>
    </div>
  );
};
