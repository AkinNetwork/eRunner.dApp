/* 
@component Hero
@author: Margareta.Sandor@akin.network
Powered by @AkinTechnologies
*/

import Banner from "./svg/BannerComposite";
import PropTypes from "prop-types";
import "../css/components/Hero.css";

function Hero({ appName, pageTitle }) {
  return (
    <div className="hero">
      <div className="info">
        <h1>{appName}</h1>
        <p>{pageTitle}</p>
      </div>
      <div className="banner">
        <Banner />
      </div>
    </div>
  );
}

Hero.propTypes = {
  appName: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default Hero;
