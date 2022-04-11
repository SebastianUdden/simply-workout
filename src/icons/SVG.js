import React from "react";

const SVG = ({
  color = "white",
  viewBox = "0 0 24 24",
  path,
  size = 24,
  onClick = () => null,
}) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    width={size || "24"}
    height={size || "24"}
    viewBox={viewBox}
    fill={color || undefined}
  >
    {path}
  </svg>
);

export default SVG;
