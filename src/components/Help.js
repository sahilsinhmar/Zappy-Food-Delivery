import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { FAQ } from "../constant";

const Section = ({ id, title, description, isVisible, setIsVisible }) => {
  return (
    <div className="flex flex-col shadow rounded-md p-2.5 m-2.5 z-[-10]">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg text-title">{title}</h3>
        {isVisible ? (
          <SlArrowUp
            onClick={() => setIsVisible(false)}
            className="cursor-pointer"
          />
        ) : (
          <SlArrowDown
            onClick={() => setIsVisible(true)}
            className="cursor-pointer"
          />
        )}
      </div>
      {isVisible && <p className="text-bio text-base">{description}</p>}
    </div>
  );
};

const Help = () => {
  const [visibleSection, setVisibleSection] = useState("");

  return (
    <div className=" mb-20 mt-4 w-full">
      <div className="card-container flex flex-col">
        <h1 className="card-container-title pb-5 text-3xl text-center"> FAQ</h1>
        {FAQ.map((question) => {
          return (
            <Section
              key={question.id}
              id={question.id}
              title={question.title}
              description={question.description}
              isVisible={visibleSection === question.id}
              setIsVisible={(display) => {
                if (display) {
                  setVisibleSection(question.id);
                } else {
                  setVisibleSection(" ");
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Help;
