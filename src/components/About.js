import { Outlet } from "react-router-dom";
import { Profile } from "./Profile";
import logoo from "./assets/logo.png";
export const About = () => {
  return (
    <div className="md:flex-row  flex flex-col bg-white justify-around items-center gap-10  w-full h-full mb-16 p-2 z-[-10]">
      <div className="flex flex-col">
        <img className="md:h-[350px] md:w-[300px] w-full  " src={logoo} />
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
