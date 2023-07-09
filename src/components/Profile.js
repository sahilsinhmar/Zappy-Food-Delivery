import React from "react";
import { SiGoogle, SiLinkedin, SiGithub } from "react-icons/si";
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
    <div className="border flex flex-col w-[400px] items-center p-4 h-[400px] justify-between bg-slate-50 shadow-2xl">
      <div className="text-2xl">About me</div>
      <div className="w-[100px] h-[100px]">
        <img className="rounded-full" src={userInfo.avatar_url} />
      </div>
      <div>
        <p className="text-lg">{userInfo.bio}</p>
      </div>
      <div className="flex gap-10 text-3xl">
        <a
          href="https://www.github.com/sahilsinhmar"
          className="mb-2.5"
          target="_blank"
        >
          <i className="bg-github icon--i">
            <SiGithub className="m-auto" />
          </i>
        </a>
        <a
          href="https://www.linkedin.com/in/sahilsinhmar/"
          className="mb-2.5"
          target="_blank"
        >
          <i className="bg-linkedin icon--i">
            <SiLinkedin className="m-auto" />
          </i>
        </a>
        <a href="mailto:sahilsinhmar07@gmail.com" className="mb-2.5">
          <i className="bg-google icon--i">
            <SiGoogle className="m-auto" />
          </i>{" "}
        </a>
      </div>
    </div>
  );
};
