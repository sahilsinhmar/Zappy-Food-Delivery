import { Outlet } from "react-router-dom";
import { Profile } from "./Profile";

export const About = () => {
  return (
    <div>
      <h1>Hey this is about</h1>
      <Profile />
    </div>
  );
};
