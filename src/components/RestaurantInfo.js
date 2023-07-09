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
    <div className="flex justify-around w-full mx-auto h-60 items-center mt-10 text-white rounded-l bg-slate-900">
      <div className="flex h-full items-center">
        <div className="w-48 h-48">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={url + cloudinaryImageId}
          />
        </div>
        <div className=" flex flex-col h-full justify-between py-6 px-4">
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
      </div>
      <div className="font-semibold text-2xl">
        <p>Rating {avgRatingString}</p>
      </div>
    </div>
  );
};
