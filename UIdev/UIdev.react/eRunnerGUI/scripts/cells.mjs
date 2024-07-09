/* 
@AkinNetwork - Scripts
@author: Margareta.Sandor@akin.network
Powered by @AkinTechnologies

Notes: Cell config renderer- Akin Smart Contracts
*/

/* eslint-disable no-undef */
import { promises as fs } from "fs";
import { resolve, join } from "path";
import { config } from "dotenv";

// Load environment variables from .env file
config();

const sourcePath = resolve(process.cwd(), process.env.SOURCE_PATH);
const destinationDir = resolve(process.cwd(), process.env.DESTINATION_DIR);

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
        const filePath = join(destinationDir, fileName);
        await fs.writeFile(filePath, cellData);
        console.log(`Generated ${filePath}`);
      }
    }
  } catch (error) {
    console.error("Error generating cell JSON files:", error);
  }
}

generateCells();
