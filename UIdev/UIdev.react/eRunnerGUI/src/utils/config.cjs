/* 
@AkinNetwork - Utils
@author: Margareta.Sandor@akin.network
Powered by @AkinTechnologies

Notes: Schema rendering configuration
*/

/* eslint-disable no-undef */
const dotenv = require("dotenv");
const path = require("path");

// Print the current working directory
console.log("Current working directory:", process.cwd());

// Load the .env file
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

// Print loaded environment variables
console.log("Loaded environment variables:", process.env);

const getConfig = (key, defaultValue = "") => {
  const value = process.env[key];
  if (typeof value === "undefined") {
    throw new Error(`Environment variable ${key} is not defined`);
  }
  return value || defaultValue;
};

module.exports = getConfig;
