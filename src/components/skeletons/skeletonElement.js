import React from "react";
import "./skeleton.css";

export const SkeletonElement = () => {
  return (
    <>
      <div className="squre-container">
        <div className="skeleton square"></div>
        <div className="skeleton textl"></div>
        <div className="skeleton texts"></div>
      </div>
    </>
  );
};
