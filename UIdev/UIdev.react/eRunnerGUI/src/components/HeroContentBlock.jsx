import PropTypes from "prop-types";
import ErrandLogo from "./svg/ErrandLogo";

function HeroContentBlock({ heroTitle, heroDescription }) {
  return (
    <div className="element style size hero-content-block">
      <ErrandLogo />
      <h1 dangerouslySetInnerHTML={{ __html: heroTitle }} />
      <p dangerouslySetInnerHTML={{ __html: heroDescription }} />
    </div>
  );
}

HeroContentBlock.propTypes = {
  heroTitle: PropTypes.string.isRequired,
  heroDescription: PropTypes.string.isRequired,
};

export default HeroContentBlock;
