import PropTypes from "prop-types";
import ErrandLogo from "./svg/ErrandLogo";
import Button from "./primes/Button";

function HeroContentBlock({ heroTitle, heroDescription }) {
  return (
    <div className="element style cont hero-content-block">
      <ErrandLogo />
      <h1 dangerouslySetInnerHTML={{ __html: heroTitle }} />
      <p dangerouslySetInnerHTML={{ __html: heroDescription }} />
      <Button />
    </div>
  );
}

HeroContentBlock.propTypes = {
  heroTitle: PropTypes.string.isRequired,
  heroDescription: PropTypes.string.isRequired,
};

export default HeroContentBlock;
