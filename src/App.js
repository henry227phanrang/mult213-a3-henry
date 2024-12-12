import React from "react";
import LessonList from "./components/LessonList";
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
    </div>
  );
}

export default App;
