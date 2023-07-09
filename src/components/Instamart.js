import { useState } from "react";
const Section = ({ title, description, isVisible, setVisible }) => {
  return (
    <div>
      <h1>{title}</h1>
      {isVisible ? (
        <button
          onClick={() => {
            setVisible(false);
          }}
        >
          hide
        </button>
      ) : (
        <button
          onClick={() => {
            setVisible(true);
          }}
        >
          show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div className="flex justify-center items-center h-[400px] border">
      <p className="text-5xl font-bold">COMING SOON...</p>
    </div>
  );
};

export default Instamart;
