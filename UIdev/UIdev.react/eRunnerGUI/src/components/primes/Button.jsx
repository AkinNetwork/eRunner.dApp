import PropTypes from "prop-types";
import "./../../css/components/primes/Button.css";

function Button({
  leftIconClass = "icon-ands-vault",
  label = "My Vault",
  rightIconClass = "icon-ands-right",
}) {
  return (
    <button className="button brand epadding">
      {leftIconClass && <span className={`icon ${leftIconClass}`} />}
      <span className="label">{label}</span>
      {rightIconClass && <span className={`icon ${rightIconClass}`} />}
    </button>
  );
}

Button.propTypes = {
  leftIconClass: PropTypes.node,
  label: PropTypes.string,
  rightIconClass: PropTypes.node,
};

export default Button;
