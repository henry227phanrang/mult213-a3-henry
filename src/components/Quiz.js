import React, { useState, useEffect } from "react";

const Quiz = () => {
  const [number, setNumber] = useState(1);
  const [userInput, setUserInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(5);
  const [feedback, setFeedback] = useState("");
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false); // Tracks if the quiz has started

  // Play number audio
  const playNumberAudio = (num) => {
    const audio = new Audio(require(`../audio/${num}.mp3`));
    audio.play().catch((err) => console.error("Audio play error:", err));
  };

  // Generate a random number for the quiz
  const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
    setFeedback("");
    setTimeLeft(5);
    playNumberAudio(randomNumber);
  };

  // Handle user input change
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // Submit the user's answer
  const handleSubmit = () => {
    if (parseInt(userInput) === number) {
      setFeedback("Correct!");
      setStreak(streak + 1);
      setBestStreak(Math.max(bestStreak, streak + 1));
      generateNumber();
    } else {
      setFeedback(`Wrong! The correct answer was ${number}`);
      setStreak(0);
    }
    setUserInput("");
  };

  // Replay the current audio
  const handleReplay = () => playNumberAudio(number);

  // Countdown timer logic
  useEffect(() => {
    if (timeLeft > 0 && quizStarted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && feedback === "" && quizStarted) {
      setFeedback("Time's up!");
    }
  }, [timeLeft, feedback, quizStarted]);

  // Start the quiz
  const startQuiz = () => {
    setQuizStarted(true);
    generateNumber();
  };

  return (
    <div>
      <h2>French Numbers Quiz</h2>
      {!quizStarted ? (
        <button onClick={startQuiz}>Start Quiz</button>
      ) : (
        <>
          <p>Guess the number after listening to the audio:</p>
          <input
            type="number"
            value={userInput}
            onChange={handleInputChange}
            disabled={timeLeft === 0}
            placeholder="Enter your guess"
          />
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleReplay}>Replay</button>
          <p style={{ color: timeLeft === 0 ? "red" : "black" }}>Time left: {timeLeft}s</p>
          <p>{feedback}</p>
          <p>Current Streak: {streak}</p>
          <p>Best Streak: {bestStreak}</p>
        </>
      )}
    </div>
  );
};

export default Quiz;
