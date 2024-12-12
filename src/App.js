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
      <main>
        <section>
          <h2>Search for Translations</h2>
          <LessonList />
        </section>
        <hr />
        <section>
          <h2>French Numbers Quiz</h2>
          <Quiz />
        </section>
      </main>
    </div>
  );
}

export default App;
