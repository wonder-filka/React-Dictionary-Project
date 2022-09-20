import React from "react";
import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App m-3">
      <div className="container-fluid">
        <Dictionary defaultKeyword="friend" />
      </div>
      <footer className="p-5">
        This project was coded by Iryna Filonova and is open-sourced on{" "}
        <a href="https://github.com/wonder-filka/react-dictionary-project">
          GitHub
        </a>{" "}
        and hosted on Netlify
      </footer>
    </div>
  );
}

export default App;
