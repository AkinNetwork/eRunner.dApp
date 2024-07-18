/* 
@component Hero
@author: Margareta.Sandor@akin.network
Powered by @AkinTechLab
*/

import Banner from "./svg/BannerComposite";
import HeroContentBlock from "./HeroContentBlock";
import PropTypes from "prop-types";
import "../css/components/Hero.css";

function Hero({ heroTitle, heroDescription }) {
  return (
    <div className="hero">
      <HeroContentBlock
        heroTitle={heroTitle}
        heroDescription={heroDescription}
      />
      <div className="banner-wrapper">
        <Banner />
      </div>
    </div>
  );
}

Hero.propTypes = {
  heroTitle: PropTypes.string.isRequired,
  heroDescription: PropTypes.string.isRequired,
};

export default Hero;
