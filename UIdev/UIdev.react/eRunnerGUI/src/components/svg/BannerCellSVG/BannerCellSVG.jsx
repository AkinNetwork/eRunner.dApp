/* 
@component BannerCellSVG 
@author: Margareta.Sandor@akin.network
Powered by @AkinTechnologies

Notes: Static rendering
*/
import "./BannerCellSVG.css";

function BannerCellSVG() {
  return (
    <svg
      className="banner"
      width="104"
      height="104"
      viewBox="0 0 104 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_133_3769)">
        <path
          className="dark"
          d="M8 12C8 9.79086 9.79086 8 12 8H92C94.2091 8 96 9.79086 96 12V92C96 94.2091 94.2091 96 92 96H12C9.79086 96 8 94.2091 8 92V12Z"
        />
        <line x1="80.25" x2="80.25" y2="104" />
        <line x1="24.25" x2="24.25" y2="104" />
        <line y1="23.75" x2="104" y2="23.75" />
        <line y1="79.75" x2="104" y2="79.75" />
        <circle className="light" cx="24" cy="24" r="2" />
        <circle className="light" cx="24" cy="80" r="2" />
        <circle className="light" cx="80" cy="24" r="2" />
        <circle className="light" cx="80" cy="80" r="2" />
      </g>
      <defs>
        <clipPath id="clip0_133_3769">
          <rect width="104" height="104" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default BannerCellSVG;
