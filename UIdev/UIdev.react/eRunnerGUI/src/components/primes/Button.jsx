import PropTypes from "prop-types";
import "./../../css/components/primes/Button.css";

function Button({ button }) {
  const elem = [];
  for (const [key, value] of Object.entries(button)) {
    if (value) {
      if (key === "leftIconClass" || key === "rightIconClass") {
        elem.push(<span key={key} className={`icon ${value}`} />);
      } else if (key === "label") {
        elem.push(
          <span key={key} className={`${key}`}>
            {value}
          </span>
        );
      }
    }
  }

  return <button className="button brand epadding">{elem}</button>;
}

Button.propTypes = {
  button: PropTypes.object.isRequired,
};

export default Button;
