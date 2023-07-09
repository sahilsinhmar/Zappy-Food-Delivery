import { Outlet } from "react-router-dom";
import { Profile } from "./Profile";
import logoo from "./assets/logo.png";
export const About = () => {
  return (
    <div className="flex bg-white justify-evenly items-center mt-10">
      <div className="flex flex-col">
        <img className="h-[350px]" src={logoo} />
        <p className="text-xl">
          Zappy Food Delivery - A simple React Based App{" "}
        </p>
      </div>
      <div className="h-[400px]">
        <Profile />
      </div>
    </div>
  );
};
