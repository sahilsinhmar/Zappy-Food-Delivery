import React from "react";
import { SkeletonElement } from "./skeletonElement";

export const SkeletonImage = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-square">
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
        <SkeletonElement />
      </div>
    </div>
  );
};
