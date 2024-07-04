/* 
@component BannerCell
@author: Margareta.Sandor@akin.network
Powered by @AkinTechnologies

Notes: Dynamic rendering of a banner cell svg composition
*/

import React, { useMemo } from "react";
import PropTypes from "prop-types";
import "./BannerCellSVG.css";

function BannerCell({ x, y, data }) {
  const { cell } = data;
  const { viewBox, defs, elements } = cell;

  const circleClassName = useMemo(() => {
    return elements.path.className === "dark" ? "light" : "dark";
  }, [elements.path.className]);

  return (
    <svg
      x={x}
      y={y}
      width={viewBox.width}
      height={viewBox.height}
      viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
      fill={viewBox.fill}
      className={viewBox.className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#cell0)">
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
            className={circleClassName}
          />
        ))}
      </g>
      <defs>
        <clipPath id="cell0">
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

BannerCell.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  data: PropTypes.shape({
    cell: PropTypes.shape({
      viewBox: PropTypes.shape({
        className: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        viewBox: PropTypes.string,
        fill: PropTypes.string,
      }).isRequired,
      defs: PropTypes.shape({
        clipPath: PropTypes.shape({
          class: PropTypes.string,
          type: PropTypes.shape({
            name: PropTypes.string,
            width: PropTypes.number,
            height: PropTypes.number,
            fill: PropTypes.string,
          }),
          sets: PropTypes.bool,
        }),
      }).isRequired,
      elements: PropTypes.shape({
        path: PropTypes.shape({
          d: PropTypes.string,
          className: PropTypes.string,
        }).isRequired,
        lines: PropTypes.arrayOf(
          PropTypes.shape({
            x1: PropTypes.number,
            y1: PropTypes.number,
            x2: PropTypes.number,
            y2: PropTypes.number,
            className: PropTypes.string,
          })
        ).isRequired,
        circles: PropTypes.arrayOf(
          PropTypes.shape({
            cx: PropTypes.number,
            cy: PropTypes.number,
            r: PropTypes.number,
            hide: PropTypes.bool,
          })
        ).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default React.memo(BannerCell);
