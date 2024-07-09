/* 
@AkinNetwork - Scripts
@author: Margareta.Sandor@akin.network
Powered by @AkinTechnologies

Notes: Schema rendering - Akin Smart Contracts
*/

import { readFileSync, writeFileSync, existsSync } from "fs";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";
import getConfig from "../src/utils/config.mjs"; // Adjust path as necessary

const SCHEMA_PATH = getConfig("SCHEMA_PATH");

// Print the SCHEMA_PATH value
console.log(`SCHEMA_PATH is: ${SCHEMA_PATH}`);

const typeMap = {
  string: "string",
  number: "number",
  boolean: "boolean",
  object: "object",
  array: "array",
};

function getType(value) {
  if (Array.isArray(value)) {
    return "array";
  }
  if (value === null) {
    return "object";
  }
  return typeof value;
}

function generateSchema(data) {
  const schema = {};
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key];
      const type = getType(value);
      if (type === "object") {
        schema[key] = generateSchema(value);
      } else if (type === "array") {
        schema[key] = [generateSchema(value[0])];
      } else {
        schema[key] = typeMap[type];
      }
    }
  }
  return schema;
}

function createSchema() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const configPath = resolve(__dirname, "..", SCHEMA_PATH);
  if (!existsSync(configPath)) {
    throw new Error(`Config file not found: ${configPath}`);
  }
  const config = JSON.parse(readFileSync(configPath, "utf-8"));
  const schema = generateSchema(config);
  const outputDir = dirname(configPath);
  const outputPath = join(outputDir, "bannerSchema.json");
  writeFileSync(outputPath, JSON.stringify(schema, null, 2));
  console.log(`Schema generated successfully at ${outputPath}`);
}

createSchema();
