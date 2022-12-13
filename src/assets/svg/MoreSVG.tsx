import React from "react";
import { IIconOrios } from "../../types/types";

const MoreSVG = ({ isActive }: IIconOrios) => {
  if (isActive) {
    return (
      <svg
        aria-label="Settings"
        className="_ab6-"
        color="#fff"
        fill="#fafafa"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          x1="3"
          x2="21"
          y1="4"
          y2="4"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          x1="3"
          x2="21"
          y1="12"
          y2="12"
        ></line>
        <line
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          x1="3"
          x2="21"
          y1="20"
          y2="20"
        ></line>
      </svg>
    );
  }
  return (
    <svg
      aria-label="Settings"
      className="_ab6-"
      color="#fafafa"
      fill="#fafafa"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="3"
        x2="21"
        y1="4"
        y2="4"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="3"
        x2="21"
        y1="12"
        y2="12"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="3"
        x2="21"
        y1="20"
        y2="20"
      ></line>
    </svg>
  );
};

export default MoreSVG;
