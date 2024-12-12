import axios from "axios";

export const fetchWordData = async (word) => {
    const apiKey = "your-api-key"; // Add your MyMemory API key if required
    const url = `https://api.mymemory.translated.net/get?q=${word}&langpair=fr|en`;

    try {
        const response = await axios.get(url);
        return response.data.responseData.translatedText;
    } catch (error) {
        console.error("Error fetching translation:", error);
        return "Translation not found";
    }
};
