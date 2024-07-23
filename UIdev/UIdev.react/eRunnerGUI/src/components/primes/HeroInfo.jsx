import PropTypes from "prop-types";
import ErrandLogo from "../svg/ErrandLogo";
import Button from "./Button";

function HeroInfo({ heroInfo }) {
  const { heroTitle, heroDescription, button } = heroInfo;
  return (
    <div className="element style cont hero-content-block">
      <ErrandLogo />
      <h1 dangerouslySetInnerHTML={{ __html: heroTitle }} />
      <p dangerouslySetInnerHTML={{ __html: heroDescription }} />
      <Button button={button} />
    </div>
  );
}

HeroInfo.propTypes = {
  heroInfo: PropTypes.shape({
    heroTitle: PropTypes.string.isRequired,
    heroDescription: PropTypes.string.isRequired,
    button: PropTypes.object.isRequired, // Updated to PropTypes.object
  }).isRequired,
};

export default HeroInfo;
