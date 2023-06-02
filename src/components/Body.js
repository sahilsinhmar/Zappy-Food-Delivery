import { restraunList } from "../constant";
import { RestaurantCard } from "./RestraurantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./shimmer";
import { SkeletonElement } from "./skeletons/skeletonElement";
import { SkeletonImage } from "./skeletons/skeletonImage";
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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&page_type=DESKTOP_WEB_LISTING"
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
      <div>
        <input
          className="search-input"
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-button"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="card-container">
        {filterRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};
