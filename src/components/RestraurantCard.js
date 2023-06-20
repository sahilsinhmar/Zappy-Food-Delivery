import { url } from "../constant";
import { AiFillStar } from "react-icons/ai";

export const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  costForTwoString,
  slaString,
  avgRating,
}) => {
  const buttonStyle = {
    backgroundColor:
      avgRating == "--"
        ? "#fff"
        : parseFloat(avgRating) < 4.0
        ? "#db7c38"
        : "#48c479",
    color: isNaN(avgRating) ? "#535665" : "#fff",
  };
  return (
    <div className="flex-col w-60 mh-60 border rounded-lg  hover:scale-105  ease-in duration-300">
      <div className="w-60 h-40 ">
        <img
          className="w-full h-full rounded object-cover"
          src={url + cloudinaryImageId}
        />
      </div>
      <div className="flex-col mt-1">
        <div className="text-xl ml-1">
          <h6>{name}</h6>
        </div>
        <div className="text-xs ml-1">
          <p>{cuisines.slice(0, 2).join(",")}</p>
        </div>
        <div className="flex justify-between items-center text-xs p-2 mt-1">
          <div
            className="flex items-center border justify-between gap-1 p-1"
            style={buttonStyle}
          >
            <AiFillStar />
            <span>{avgRating}</span>
          </div>
          <div>•</div>
          <div>{slaString}</div>
          <div>•</div>
          <div>{costForTwoString}</div>
        </div>
      </div>
    </div>
  );
};
