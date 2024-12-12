import React, { useState } from "react";
import { fetchWordData } from "../api/dictionary";

const LessonList = () => {
  const [word, setWord] = useState("");
  const [wordData, setWordData] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchWordData(word);
      setWordData(data[0]);
    } catch {
      setWordData(null);
    }
  };

  return (
    <div>
      <h2>Search for a Word</h2>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter a word"
      />
      <button onClick={handleSearch}>Search</button>

      {wordData && (
        <div>
          <h3>{wordData.word}</h3>
          <p>Definition: {wordData.meanings[0]?.definitions[0]?.definition}</p>
          <p>Example: {wordData.meanings[0]?.definitions[0]?.example}</p>
        </div>
      )}
    </div>
  );
};

export default LessonList;
