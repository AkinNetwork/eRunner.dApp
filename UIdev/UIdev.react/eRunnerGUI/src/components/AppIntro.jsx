/* 
@component Application Intro
@author: Margareta.Sandor@akin.network
Powered by @AkinTechLab
*/

import Hero from "./gui/Hero";
import Footer from "./gui/Footer";
import PropTypes from "prop-types";

function AppIntro({ data }) {
  const heroData = data?.Hero;
  const footerData = data?.Footer;

  if (!heroData || !footerData) {
    return <div>Error: Missing required data</div>;
  }

  return (
    <div className="intro">
      <Hero heroData={heroData} />
      <Footer footerData={footerData} />
    </div>
  );
}

AppIntro.propTypes = {
  data: PropTypes.shape({
    Hero: PropTypes.object.isRequired,
    Footer: PropTypes.object.isRequired,
  }).isRequired,
};

export default AppIntro;
