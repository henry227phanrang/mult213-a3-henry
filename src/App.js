import React from "react";
import LessonList from "./components/LessonList";
import Progress from "./components/Progress";
import Quiz from "./components/Quiz";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Language Learning App</h1>
      </header>
      <LessonList />
      <Quiz />
      <Progress />
    </div>
  );
}

export default App;
