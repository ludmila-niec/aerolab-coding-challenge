import React from "react";

const ArrowRight = ({width, height}) => {
  return (
    <svg
      width={width || "48px"}
      height={height || "48px"}
      viewBox="0 0 48 48"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>arrow-next</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Catalog-p2" transform="translate(-1260.000000, -512.000000)">
          <g id="menu" transform="translate(132.000000, 512.000000)">
            <g id="arrow-right" transform="translate(1128.000000, 0.000000)">
              <circle
                id="Oval-4"
                stroke="#D9D9D9"
                strokeWidth="1"
                cx="24"
                cy="24"
                r="23.5"
              ></circle>
              <polygon
                id="Shape"
                fill="#D9D9D9"
                fillRule="evenodd"
                transform="translate(24.000000, 23.705000) scale(1, -1) rotate(-90.000000) translate(-24.000000, -23.705000) "
                points="28.59 20 24 24.58 19.41 20 18 21.41 24 27.41 30 21.41"
              ></polygon>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ArrowRight;
