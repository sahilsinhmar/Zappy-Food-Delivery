import { restraunList } from "../constant";
import { RestaurantCard } from "./RestraurantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./shimmer";
import { SkeletonElement } from "./skeletons/skeletonElement";
import { SkeletonImage } from "./skeletons/skeletonImage";
import { Link } from "react-router-dom";
import { GET_RESTAURANTS_LIST } from "./utils/helper";
function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
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
    const data = await fetch(GET_RESTAURANTS_LIST);
    const json = await data?.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (allRestaurants?.length === 0) return <SkeletonImage />;
  if (filterRestaurants?.length === 0) {
    return <h1>No restaurant found</h1>;
  }

  return allRestaurants?.length === 0 ? (
    <SkeletonImage />
  ) : (
    <>
      <div className="w-full  flex-col flex gap-4 items-center  mb-16">
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
            className="text-lg border w-24 rounded-lg bg-black text-white p-2 "
            onClick={() => {
              const data = filterData(searchText, allRestaurants);
              setFilterRestaurants(data);
            }}
          >
            Search
          </button>
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap gap-5 md:justify-between justify-evenly">
            {filterRestaurants?.map((restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant.data.id}
                  key={restaurant.data.id}
                >
                  <RestaurantCard {...restaurant.data} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
