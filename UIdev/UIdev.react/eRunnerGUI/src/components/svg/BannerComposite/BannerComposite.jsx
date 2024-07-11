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

function BannerComposite() {
  const [config, setConfig] = useState(null);
  const [svgData, setSvgData] = useState([]);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await axios.get("/public/data/banner.json");
        setConfig(response.data);
      } catch (error) {
        console.error("Error fetching banner config:", error);
      }
    };

    fetchConfig();
  }, []);

  useEffect(() => {
    if (!config) return;

    const fetchCellData = async () => {
      const data = [];
      try {
        for (let row = 1; row <= config.rows; row++) {
          for (let col = 1; col <= config.columns; col++) {
            const configResponse = await axios.get(
              `/public/data/banner/cell-${row}-${col}.json`
            );
            data.push({
              row,
              col,
              config: configResponse.data,
            });
          }
        }
        setSvgData(data);
      } catch (error) {
        console.error("Error fetching SVG data:", error);
      }
    };

    fetchCellData();
  }, [config]);

  if (!config || !svgData.length) return null;

  const {
    horizontalOverlap,
    verticalOverlap,
    cellWidth,
    cellHeight,
    bannerWidth,
    bannerHeight,
    rows,
    columns,
  } = config;

  const originalWidth = cellWidth * columns - horizontalOverlap * (columns - 1);
  const originalHeight = cellHeight * rows - verticalOverlap * (rows - 1);

  const scaleX = bannerWidth / originalWidth;
  const scaleY = bannerHeight / originalHeight;
  const scale = Math.min(scaleX, scaleY); // Maintain aspect ratio

  return (
    <svg
      width={bannerWidth}
      height={bannerHeight}
      viewBox={`0 0 ${bannerWidth} ${bannerHeight}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        transform={`scale(${scale}) translate(${
          (bannerWidth / scale - originalWidth) / 2
        }, ${(bannerHeight / scale - originalHeight) / 2})`}
      >
        {svgData.map(({ row, col, config }) => {
          const x = (col - 1) * (cellWidth - horizontalOverlap);
          const y = (row - 1) * (cellHeight - verticalOverlap);
          return <BannerCell key={`${row}-${col}`} x={x} y={y} data={config} />;
        })}
      </g>
    </svg>
  );
}

BannerComposite.propTypes = {
  horizontalOverlap: PropTypes.number,
  verticalOverlap: PropTypes.number,
};

export default BannerComposite;
