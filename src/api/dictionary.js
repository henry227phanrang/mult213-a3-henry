import axios from "axios";

const BASE_URL = "https://api.mymemory.translated.net/get";

export const fetchWordData = async (word) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: word,
        langpair: "fr|en",
      },
    });
    return response.data.responseData.translatedText;
  } catch (error) {
    console.error("Error fetching data from MyMemory API:", error);
    throw error;
  }
};
