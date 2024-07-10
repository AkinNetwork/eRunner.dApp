/* 
@AkinNetwork - Scripts
@author: Margareta.Sandor@akin.network
Powered by @AkinTechnologies

Notes: Schema rendering - Akin Smart Contracts
*/

/* eslint-disable no-undef */
const fs = require("fs").promises;
const path = require("path");
const getConfig = require("../src/utils/config.cjs");

const bannerDir = path.resolve(process.cwd(), getConfig("DESTINATION_DIR"));
const outputDir = path.resolve(process.cwd(), getConfig("SCHEMA_PATH"));

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

async function createSchemas() {
  try {
    const files = await fs.readdir(bannerDir);

    await fs.mkdir(outputDir, { recursive: true });

    for (const file of files) {
      const filePath = path.join(bannerDir, file);
      const fileData = await fs.readFile(filePath, "utf-8");
      const jsonData = JSON.parse(fileData);
      const schema = generateSchema(jsonData);
      const schemaFilePath = path.join(
        outputDir,
        file.replace(".json", "-schema.json")
      );
      await fs.writeFile(schemaFilePath, JSON.stringify(schema, null, 2));
      console.log(`Generated schema for ${file} at ${schemaFilePath}`);
    }
  } catch (error) {
    console.error("Error generating schemas:", error);
  }
}

createSchemas();
