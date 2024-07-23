/* 
@component Hero
@author: Margareta.Sandor@akin.network
Powered by @AkinTechLab
*/

import Banner from "../svg/BannerComposite";
import HeroInfo from "./../primes/HeroInfo";
import PropTypes from "prop-types";
import "../../css/components/Hero.css";

function Hero({ heroData }) {
  const { heroInfo } = heroData;
  return (
    <div className="hero">
      <HeroInfo heroInfo={heroInfo} />
      <div className="banner-wrapper">
        <Banner />
      </div>
    </div>
  );
}

Hero.propTypes = {
  heroData: PropTypes.shape({
    heroInfo: PropTypes.object.isRequired,
  }).isRequired,
};

export default Hero;
