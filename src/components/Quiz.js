import React, { useState, useEffect, useRef } from "react";

const Quiz = () => {
  const [number, setNumber] = useState("");
  const [userInput, setUserInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(5);
  const [feedback, setFeedback] = useState("");
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  const audioRef = useRef(null);

  // Generate a random number and play audio
  const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
    setFeedback("");
    playNumberAudio(randomNumber);
    setTimeLeft(5);
  };

  // Play number audio
  const playNumberAudio = (num) => {
    const audio = new Audio(`https://audio-file-source.com/fr/${num}.mp3`);
    audioRef.current = audio;
    audio.play();
  };

  // Handle timer countdown
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && feedback === "") {
      setFeedback("Time's up!");
    }
  }, [timeLeft, feedback]);

  // Handle user input
  const handleChange = (e) => setUserInput(e.target.value);

  // Check user answer
  const checkAnswer = () => {
    if (parseInt(userInput) === number) {
      setFeedback("Correct!");
      setStreak(streak + 1);
      setBestStreak(Math.max(bestStreak, streak + 1));
      generateNumber();
    } else {
      setFeedback(`Wrong! The correct answer was ${number}.`);
      setStreak(0);
    }
    setUserInput("");
  };

  // Handle keyboard shortcuts
  const handleKeyDown = (e) => {
    if (e.key === "r") playNumberAudio(number); // Replay
    if (e.key === "q") setFeedback(`The correct answer is ${number}`); // Reveal answer
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [number]);

  // Start the quiz on mount
  useEffect(() => {
    generateNumber();
  }, []);

  return (
    <div>
      <h2>French Numbers Quiz</h2>
      <p>Listen to the number and type your guess:</p>
      <div>
        <input
          type="number"
          value={userInput}
          onChange={handleChange}
          disabled={timeLeft === 0}
          placeholder="Enter your guess"
        />
        <button onClick={checkAnswer}>Submit</button>
      </div>
      <p style={{ color: timeLeft === 0 ? "red" : "black" }}>
        Time left: {timeLeft}s
      </p>
      <p>{feedback}</p>
      <p>Current Streak: {streak}</p>
      <p>Best Streak: {bestStreak}</p>
    </div>
  );
};

export default Quiz;
