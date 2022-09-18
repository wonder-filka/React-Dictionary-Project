import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetic">
      {props.phonetics.text}
      <a href={props.phonetics.audio} target="_blanck">
        Listen
      </a>
      <figure>
        <audio controls src={props.phonetics.audio}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure>
    </div>
  );
}
