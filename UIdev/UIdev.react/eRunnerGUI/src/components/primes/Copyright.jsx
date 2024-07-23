/* 
@component Akin Network Logo
@author: Margareta.Sandor@akin.network
Powered by @AkinTechLab
*/

import PropTypes from "prop-types";
import AkinNetworkLogo from "./../svg/AkinNetworkLogo";

function Copyright({ copyright }) {
  const { copyright: text } = copyright;
  return (
    <div className="copyright">
      <p className="footnote" dangerouslySetInnerHTML={{ __html: text }} />
      <AkinNetworkLogo />
    </div>
  );
}

Copyright.propTypes = {
  copyright: PropTypes.shape({
    copyright: PropTypes.string.isRequired,
  }).isRequired,
};

export default Copyright;
