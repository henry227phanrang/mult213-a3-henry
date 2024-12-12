import React, { useState } from "react";
import { fetchWordData } from "../api/dictionary"; // Import the function from dictionary.js

const LessonList = () => {
  const [word, setWord] = useState(""); // User input word
  const [translation, setTranslation] = useState(""); // Translation result
  const [error, setError] = useState(""); // Error message, if any

  const handleSearch = async () => {
    if (!word.trim()) {
      setError("Please enter a word to translate.");
      return;
    }
    try {
      setError(""); // Clear any previous errors
      const result = await fetchWordData(word); // Call the API
      setTranslation(result); // Update translation
    } catch (err) {
      setError("Error fetching translation. Please try again.");
    }
  };

  return (
    <div>
      <h2>French-English Dictionary</h2>
      <div>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter a French word"
        />
        <button onClick={handleSearch}>Translate</button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {translation && (
        <div>
          <h3>Translation:</h3>
          <p>{translation}</p>
        </div>
      )}
    </div>
  );
};

export default LessonList;
