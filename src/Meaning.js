import React from "react";
// import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definitions, index) {
        return (
          <div key="index">
            <p>
              {definitions.definition}
              <br />
              <em>{definitions.example}</em>
            </p>
          </div>
        );
      })}
      {/* <Synonyms synonyms={props.meaning.synonyms} /> */}
    </div>
  );
}
