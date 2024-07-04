/* eslint-disable no-undef */
import { config } from "dotenv";
import { resolve } from "path";

// Print the current working directory
console.log("Current working directory:", process.cwd());

// Load the .env file
config({ path: resolve(process.cwd(), ".env") });

// Print loaded environment variables
console.log("Loaded environment variables:", process.env);

const getConfig = (key, defaultValue = "") => {
  const value = process.env[key];
  if (typeof value === "undefined") {
    throw new Error(`Environment variable ${key} is not defined`);
  }
  return value || defaultValue;
};

export default getConfig;
