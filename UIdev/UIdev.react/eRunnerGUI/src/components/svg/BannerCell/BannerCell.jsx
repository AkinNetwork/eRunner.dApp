/* 
@component BannerCell
@author: Margareta.Sandor@akin.network
Powered by @AkinTechnologies

Notes: Dynamic rendering of a banner cell svg composition
*/

import React, { useMemo } from "react";
import PropTypes from "prop-types";
import propTypes from "../../../utils/propTypesHelper";
import "./BannerCellSVG.css"; // Import the CSS file

// eslint-disable-next-line react-refresh/only-export-components
function BannerCellSVG({ x, y, data }) {
  const { cell } = data;
  const { viewBox, defs, elements } = cell;

  const circleClassName = useMemo(() => {
    return elements.rect.className === "dark" ? "light" : "dark";
  }, [elements.rect.className]);

  return (
    <svg
      x={x}
      y={y}
      width={viewBox.width}
      height={viewBox.height}
      viewBox={viewBox.viewBox}
      fill={viewBox.fill}
      className={viewBox.className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path {...elements.path} />
        {elements.lines.map((line, index) => (
          <line key={index} {...line} />
        ))}
        {elements.circles.map(
          (circle, index) =>
            !circle.hide && (
              <circle key={index} {...circle} className={circleClassName} />
            )
        )}
      </g>
      <defs>
        <clipPath id="clip0">
          <rect {...defs.clipPath.type} />
        </clipPath>
      </defs>
    </svg>
  );
}

BannerCellSVG.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  data: PropTypes.shape(propTypes).isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(BannerCellSVG);
