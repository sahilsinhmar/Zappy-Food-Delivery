import React from "react";
import { useState, useEffect } from "react";

export const Profile = () => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const data = await fetch("https://api.github.com/users/sahilsinhmar", {
          signal: controller.signal,
        });
        const json = await data.json();
        setUserInfo(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div>
      <img src={userInfo.avatar_url} />
      <h1>Name: {userInfo.name}</h1>
      <h1>Location: {userInfo.location}</h1>
    </div>
  );
};
