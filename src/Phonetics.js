import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetics.audio && props.phonetics.text) {
    return (
      <div className="Phonetic col">
        <figure className="p-0 m-0">
          <audio controls src={props.phonetics.audio}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </figure>
        {props.phonetics.text}
      </div>
    );
  } else {
    return null;
  }
}
