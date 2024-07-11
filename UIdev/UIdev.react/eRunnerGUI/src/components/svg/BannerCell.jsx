/* 
@component BannerCell
@author: Margareta.Sandor@akin.network
Powered by @AkinTechnologies

Notes: Dynamic rendering of a banner cell svg composition
*/

import React, { useMemo } from "react";
import PropTypes from "prop-types";
import propTypes from "../../utils/propTypesHelper";
import "../../css/components/BannerSVG.css"; // Import the CSS file

function BannerCell({ x, y, data }) {
  const { cell } = data;
  const { id, viewBox, defs, elements } = cell;

  const circleClassName = useMemo(() => {
    return elements.path.className === "light" ? "dark" : "light";
  }, [elements.path.className]);

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
      <g clipPath={`url(#${id})`}>
        {(() => {
          // Destructure isHidden and render path if it's not hidden
          const { isHidden, ...pathProps } = elements.path;
          return !isHidden && <path {...pathProps} />;
        })()}

        {elements.lines.map((line, index) => {
          // Destructure isHidden and render line if it's not hidden
          const { isHidden, ...lineProps } = line;
          return !isHidden && <line key={index} {...lineProps} />;
        })}
        {elements.circles.map((circle, index) => {
          // Destructure isHidden and render circle if it's not hidden
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
        <clipPath id={`${id}`}>
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
