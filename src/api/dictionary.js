import axios from "axios";

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const fetchWordData = async (word) => {
  try {
    const response = await axios.get(`${BASE_URL}${word}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
