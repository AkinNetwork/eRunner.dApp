/* 
@component Hero
@author: Margareta.Sandor@akin.network
Powered by @AkinTechnologies
*/

import Banner from "./svg/BannerComposite";
import PropTypes from "prop-types";

function Hero({ appName, pageTitle }) {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1 className="app-name">{appName}</h1>
        <h2 className="page-title">{pageTitle}</h2>
      </div>
      <div className="hero-right">
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
