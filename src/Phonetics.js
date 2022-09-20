import React from "react";
import "./Phonetics.css";
import "./App.css";
import iconPlay from "./iconPlay.png";

export default function Phonetics(props) {
  let audio = new Audio(props.phonetics.audio);
  function playAudio() {
    audio.play();
  }

  return (
    <div className="Phonetic p-3 text-center">
      <button onClick={playAudio} className="iconPlay">
        <img src={iconPlay} className="icon" />
      </button>
      <br />
      {props.phonetics.text}
    </div>
  );
}
