import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="w-full h-[50px] bg-gray-950 text-white p-2 flex  items-center justify-around bottom-0 fixed scroll">
      <div className="text-2xl">Happy Ordering</div>
      <div className="flex items-center text-xl gap-3">
        <p className="text-xl">
          Made with <span className="text-red">&#x2764;</span>
        </p>
        <p>by</p>
        <div className="flex gap-2">
          <p>Sahil -</p>
          <Link to="https://www.github.com/sahilsinhmar">
            <button className="border px-2 bg-black text-white">Github</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
