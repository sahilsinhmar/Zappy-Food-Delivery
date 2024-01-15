import { restraunList } from "../constant";
import { RestaurantCard } from "./RestraurantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./shimmer";
import { SkeletonElement } from "./skeletons/skeletonElement";
import { SkeletonImage } from "./skeletons/skeletonImage";
import { Link } from "react-router-dom";
import { GET_RESTAURANTS_LIST } from "./utils/helper";
import { useDispatch } from "react-redux";
import { addInfo } from "./ResInfoSlice";

function filterData(searchText, restaurants) {
  return restaurants?.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
}

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(GET_RESTAURANTS_LIST);
      const json = await data?.json();

      setAllRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      console.log(allRestaurants);
    } catch (error) {
      console.log(error);
    }
  }

  if (allRestaurants?.length === 0) return <SkeletonImage />;
  if (filterRestaurants?.length === 0) {
    return <h1>No restaurant found</h1>;
  }

  return allRestaurants?.length === 0 ? (
    <SkeletonImage />
  ) : (
    <>
      <div className="w-full  flex-col flex gap-4 items-center mt-[120px] md:mt-16  mb-16 -z-10">
        <div className="md:flex-row gap-3 flex flex-col  w-full md:w-[700px] items-center">
          <input
            className="border-2 w-full h-12 p-4 hover:shadow-sm "
            type="text"
            placeholder="Search for Restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="text-lg  w-24 rounded-lg bg-black text-white p-2 "
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilterRestaurants(data);
            }}
          >
            Search
          </button>
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap gap-8 md:justify-between justify-evenly">
            {filterRestaurants?.map((restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                >
                  <RestaurantCard {...restaurant?.info} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
