import { AiFillStar } from "react-icons/ai";
import { url } from "../constant";
import { BiPhoneCall, BiRupee, BiSolidTimer, BiTimer } from "react-icons/bi";
import { HiCurrencyRupee } from "react-icons/hi2";
export const RestaurantInfo = ({ restaurantInfo }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    sla,
    areaName,
    feeDetails,
    totalRatingsString,
  } = restaurantInfo;
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
    <div className="flex flex-col gap-3">
      <div className=" w-full md:flex-row flex flex-col justify-around    ">
        <div className="w-full md:w-[200px] h-[179px]">
          <img
            src={url + cloudinaryImageId}
            className="h-full w-full object-cover rounded-2xl"
          />
        </div>
        <div className=" w-full  flex   justify-between  p-3">
          <div className="flex flex-col ">
            <h1 className="text-xl font-bold mb-1">{name}</h1>
            <div className=" flex flex-col text-gray-500 text-sm ">
              <p>{cuisines.join(", ")}</p>
              <div className="flex items-center gap-1">
                <p>{areaName},</p>
                <p>{sla?.lastMileTravelString}</p>
              </div>
            </div>
            <p className="text-gray-500 flex flex-col self-end mt-auto text-sm">
              {feeDetails?.message}
            </p>
          </div>

          <div className=" hidden xs:flex xs:flex-col border self-center items-start p-2 gap-1 rounded-lg ">
            <div className="flex items-center gap-1 p-2 ">
              <div
                className="flex items-center gap-1 p-1 rounded-full"
                style={buttonStyle}
              >
                <AiFillStar size={10} />
              </div>
              <span className="text-sm font-semibold text-gray-700">
                {avgRating}
              </span>
            </div>
            <div className="border-t-2  w-full "></div>
            <p className="text-xs py-2 text-gray-600">{totalRatingsString}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3 text-[#3e4152] font-semibold border-t-2 border-dotted border-gray-400 mt-2 py-3">
        <p className="flex items-center gap-2">
          <BiTimer size={28} />
          {sla?.slaString}
        </p>
        <p className="flex items-center gap-1">
          <BiRupee size={24} />
          {costForTwoMessage}
        </p>
      </div>
    </div>
  );
};
