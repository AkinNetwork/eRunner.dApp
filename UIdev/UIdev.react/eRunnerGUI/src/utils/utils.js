/* 
@AkinNetwork - Utils
@author: Margareta.Sandor@akin.network
Powered by @AkinTechnologies

Notes: Dynamic rendering of a banner cell svg composition
*/

// Fetching data from the content directory named "data"
export const jsonData = async (fileName) => {
  try {
    const response = await fetch(`/data/${fileName}.json`);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
