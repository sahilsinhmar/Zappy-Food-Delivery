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
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4089123&lng=77.3177894&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  if (allRestaurants?.length === 0) return <SkeletonImage />;
  if (filterRestaurants?.length === 0) {
    return <h1>No restaurant found</h1>;
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="mt-10 ml-60 flex gap-8">
        <input
          className="border-b-2 w-1/2 h-12 p-4 "
          type="text"
          placeholder="Search for Restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="text-l border w-24 rounded-lg bg-black text-white "
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="p-20">
        <div className="flex flex-wrap gap-10 justify-between">
          {filterRestaurants.map((restaurant) => {
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
    </>
  );
};
