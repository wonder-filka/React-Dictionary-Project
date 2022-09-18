import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetic text-center">
      <figure className="p-0 m-0">
        <audio controls src={props.phonetics.audio}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </figure>
      {props.phonetics.text}
    </div>
  );
}
