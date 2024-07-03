/* 
@component BannerCell
@author: Margareta.Sandor@akin.network
Powered by @AkinTechnologies

Notes: Dynamic rendering of a banner cell svg composition
*/

import { useEffect, useState } from "react";
import axios from "axios";
import "./BannerCellSVG.css";

function BannerCell() {
  const jsonData = "./data/banner.json";
  const [svgData, setSvgData] = useState(null);

  useEffect(() => {
    // Fetch the JSON data
    axios
      .get(jsonData)
      .then((response) => setSvgData(response.data))
      .catch((error) => console.error("Error fetching SVG data:", error));
  }, []);

  if (!svgData) return null;

  const { cell } = svgData;
  const { viewBox, defs, elements } = cell;
  //   console.log(cell);

  return (
    <svg
      width={viewBox.width}
      height={viewBox.height}
      viewBox={viewBox.viewBox}
      fill={viewBox.fill}
      className={viewBox.className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path className={elements.path.className} d={elements.path.d} />
        {elements.lines.map((line, index) => (
          <line
            key={index}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            className={line.className}
          />
        ))}
        {elements.circles.map((circle, index) => (
          <circle
            key={index}
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            className={circle.className}
          />
        ))}
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width={defs.clipPath.type.width}
            height={defs.clipPath.type.height}
            fill={defs.clipPath.type.fill}
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default BannerCell;
