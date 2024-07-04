/* 
@component Banner
@author: Margareta.Sandor@akin.network
Powered by @AkinTechnologies

Notes: Dynamic rendering of a banner svg composition
*/

import { useEffect, useState } from "react";
import axios from "axios";
import BannerCell from "../BannerCell/BannerCell";

function BannerComposite() {
  const bannerJSON = "/data/banner.json";
  const [svgData, setSvgData] = useState(null);

  useEffect(() => {
    // Fetch the JSON data
    axios
      .get(bannerJSON)
      .then((response) => setSvgData(response.data))
      .catch((error) => console.error("Error fetching SVG data:", error));
  }, []);

  if (!svgData) return null;

  const rows = 7;
  const columns = 8;
  const cellWidth = 104;
  const cellHeight = 104;

  const bannerWidth = 832;
  const bannerHeight = 496;

  const cells = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const x = col * cellWidth;
      const y = row * cellHeight;
      cells.push(
        <BannerCell key={`${row}-${col}`} x={x} y={y} data={svgData} />
      );
    }
  }

  return (
    <svg
      width={bannerWidth}
      height={bannerHeight}
      viewBox={`0 0 ${bannerWidth} ${bannerHeight}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {cells}
    </svg>
  );
}

export default BannerComposite;
