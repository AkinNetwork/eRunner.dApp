/* 
@component Banner
@author: Margareta.Sandor@akin.network
Powered by @AkinTechnologies

Notes: Dynamic rendering of a banner svg composition
*/

import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import BannerCell from "../BannerCell/BannerCell";

function BannerComposite({ horizontalOverlap = 0, verticalOverlap = 56 }) {
  const bannerJSON = "/data/cell.json";
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

  const bannerWidth = cellWidth * columns - horizontalOverlap * (columns - 1);
  const bannerHeight = cellHeight * rows - verticalOverlap * (rows - 1);

  const cells = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const x = col * (cellWidth - horizontalOverlap);
      const y = row * (cellHeight - verticalOverlap);
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

BannerComposite.propTypes = {
  horizontalOverlap: PropTypes.number,
  verticalOverlap: PropTypes.number,
};

export default BannerComposite;
