/* 
@AkinNetwork - Utils
@author: Margareta.Sandor@akin.network
Powered by @AkinTechnologies

Notes: Maps the propTypes for the banner Schema
*/

import PropTypes from "prop-types";
import schema from "../data/schemas/bannerSchema.json";

const typeMap = {
  string: PropTypes.string,
  number: PropTypes.number,
  boolean: PropTypes.bool,
  array: PropTypes.array,
  object: PropTypes.object,
};

function createPropTypes(schema) {
  const propTypes = {};
  for (const key in schema) {
    if (Object.prototype.hasOwnProperty.call(schema, key)) {
      const type = schema[key];
      if (typeof type === "object" && !Array.isArray(type)) {
        propTypes[key] = PropTypes.shape(createPropTypes(type)).isRequired;
      } else if (Array.isArray(type)) {
        const arrayItemType = typeof type[0];
        if (arrayItemType === "object") {
          propTypes[key] = PropTypes.arrayOf(
            PropTypes.shape(createPropTypes(type[0]))
          ).isRequired;
        } else {
          propTypes[key] = PropTypes.arrayOf(typeMap[arrayItemType]).isRequired;
        }
      } else {
        propTypes[key] = typeMap[type].isRequired;
      }
    }
  }
  return propTypes;
}

const propTypes = createPropTypes(schema);

export default propTypes;
