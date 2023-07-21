import { url } from "../constant";
export const RestaurantInfo = ({
  cloudinaryImageId,
  name,
  cuisines,
  locality,
  costForTwoMessage,
  avgRatingString,
  sla,
  areaName,
}) => {
  return (
    <div className="md:flex-row  items-center flex flex-col  text-white rounded-l bg-slate-900 sm:items-center justify-between md:justify-around md:py-8">
      <div className="md:w-[298px] md:h-[298px]">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={url + cloudinaryImageId}
        />
      </div>
      <div className=" flex flex-col h-full justify-between py-6 px-4 gap-4  md:text-2xl  md:gap-32 md:ml-[-70px]">
        <div className="">
          <h1 className="text-3xl font-semibold">{name}</h1>
          <p>{cuisines?.join(",")}</p>
        </div>
        <div className="flex gap-2">
          <div className="font-semibold">
            {locality} {areaName}
          </div>
          <div>•</div>
          <div className="font-semibold">{sla?.slaString}</div>
          <div className="font-semibold">•</div>
          <div className="font-semibold">{costForTwoMessage}</div>
        </div>
      </div>

      <div className="text-xl">
        <p>Rating {avgRatingString}</p>
      </div>
    </div>
  );
};
