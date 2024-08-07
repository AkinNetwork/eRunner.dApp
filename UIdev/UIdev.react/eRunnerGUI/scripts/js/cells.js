/* eslint-disable no-undef */
const fs = require("fs");
const path = require("path");

// Paths
const sourcePath = path.resolve(__dirname, "../public/data/cell.json");
const destinationDir = path.resolve(__dirname, "../public/data/banner");

// Grid dimensions
const rows = 7;
const columns = 8;

// Read the source cell.json
const cellData = fs.readFileSync(sourcePath, "utf-8");

// Ensure the destination directory exists
if (!fs.existsSync(destinationDir)) {
  fs.mkdirSync(destinationDir, { recursive: true });
}

// Generate the cell JSON files
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < columns; col++) {
    const fileName = `cell-${row + 1}-${col + 1}.json`;
    const filePath = path.join(destinationDir, fileName);
    fs.writeFileSync(filePath, cellData);
    console.log(`Generated ${filePath}`);
  }
}
