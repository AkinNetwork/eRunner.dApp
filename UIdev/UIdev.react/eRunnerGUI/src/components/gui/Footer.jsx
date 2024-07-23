/* 
@component Footer
@author: Margareta.Sandor@akin.network
Powered by @AkinTechLab
*/

import Copyright from "../primes/Copyright";
import PropTypes from "prop-types";
import "./../../css/components/Footer.css";

function Footer({ footerData }) {
  const { Copyright: copyright } = footerData;
  return (
    <footer className="footer cpadding">
      <Copyright copyright={copyright} />
    </footer>
  );
}

Footer.propTypes = {
  footerData: PropTypes.shape({
    Copyright: PropTypes.shape({
      copyright: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Footer;
