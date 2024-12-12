import React from "react";
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
          <Quiz />
        </section>
      </main>
    </div>
  );
}

export default App;
