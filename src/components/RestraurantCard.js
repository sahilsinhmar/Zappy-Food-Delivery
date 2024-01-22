import { url } from "../constant";
import { AiFillStar } from "react-icons/ai";

export const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  costForTwo,
  sla,
  avgRating,
  areaName,
}) => {
  const buttonStyle = {
    backgroundColor:
      avgRating == "--"
        ? "#fff"
        : parseFloat(avgRating) < 4.0
        ? "#db7c38"
        : "#188c3e",
    color: isNaN(avgRating) ? "#535665" : "#fff",
  };
  return (
    <div className="flex-col w-full md:w-[280px] h-full    hover:scale-90  ease-in duration-200  ">
      <div className="w-full md:w-[280px]  h-[179px] ">
        <img
          src={url + cloudinaryImageId}
          className="w-[280px] h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex-col justify-start mt-1 pl-3 gap-2 ">
        <h6 className="text-lg text-gray-700 font-semibold ">
          {name.slice(0, 20)}
        </h6>

        <div className="flex  items-center gap-1 ">
          <div className="flex items-center gap-1">
            <div
              className="flex items-center gap-1 p-1 rounded-full"
              style={buttonStyle}
            >
              <AiFillStar size={12} />
            </div>
            <span className="text-[1rem] font-semibold text-gray-700">
              {avgRating}
            </span>
          </div>
          <div>•</div>
          <div className="text-[1rem] font-semibold text-gray-700">
            {sla?.slaString}
          </div>
          <div>•</div>
          <div className="text-[1rem] font-semibold text-gray-700">
            {costForTwo}
          </div>
        </div>

        <p className="text-gray-500">{cuisines.slice(0, 3).join(",")}</p>
        <p className="text-gray-500">{areaName}</p>
      </div>
    </div>
  );
};
