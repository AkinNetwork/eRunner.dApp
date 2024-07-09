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

function BannerCell({ x, y, data }) {
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
        <rect {...elements.rect} />
        {elements.path && <path {...elements.path} />}
        {elements.lines.map((line, index) => {
          const { isHidden, ...lineProps } = line;
          return !isHidden && <line key={index} {...lineProps} />;
        })}
        {elements.circles.map((circle, index) => {
          const { isHidden, ...circleProps } = circle;
          return (
            !isHidden && (
              <circle
                key={index}
                {...circleProps}
                className={circleClassName}
              />
            )
          );
        })}
      </g>
      <defs>
        <clipPath id="clip0">
          <rect {...defs.clipPath.type} />
        </clipPath>
      </defs>
    </svg>
  );
}

BannerCell.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  data: PropTypes.shape(propTypes).isRequired,
};

// Set the display name for the memoized component
const MemoizedBannerCell = React.memo(BannerCell);
MemoizedBannerCell.displayName = "BannerCell";

export default MemoizedBannerCell;
