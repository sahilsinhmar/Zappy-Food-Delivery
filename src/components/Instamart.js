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
    <div>
      <Section
        title={"About Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection === "about"}
        setVisible={() =>
          setVisibleSection(visibleSection === "about" ? "" : "about")
        }
      />

      <Section
        title={"Carrer"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection === "carrer"}
        setVisible={() =>
          setVisibleSection(visibleSection === "carrer" ? "" : "carrer")
        }
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection === "team"}
        setVisible={() =>
          setVisibleSection(visibleSection === "team" ? "" : "team")
        }
      />
    </div>
  );
};

export default Instamart;
