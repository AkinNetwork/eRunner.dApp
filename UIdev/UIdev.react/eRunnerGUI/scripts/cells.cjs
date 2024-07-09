/* eslint-disable no-undef */
const fs = require("fs").promises;
const path = require("path");

// Paths
const sourcePath = path.resolve(process.cwd(), "public/data/cell.json");
const destinationDir = path.resolve(process.cwd(), "public/data/banner");

// Grid dimensions
const rows = 7;
const columns = 8;

async function generateCells() {
  try {
    // Read the source cell.json
    const cellData = await fs.readFile(sourcePath, "utf-8");

    // Ensure the destination directory exists
    await fs.mkdir(destinationDir, { recursive: true });

    // Generate the cell JSON files
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        const fileName = `cell-${row + 1}-${col + 1}.json`;
        const filePath = path.join(destinationDir, fileName);
        await fs.writeFile(filePath, cellData);
        console.log(`Generated ${filePath}`);
      }
    }
  } catch (error) {
    console.error("Error generating cell JSON files:", error);
  }
}

generateCells();
