import React from "react";
import "./App.css";

export default function Meaning(props) {
  let listInfo = props.meaning.definitions.map(function (definitions, index) {
    return (
      <div key="index">
        <li>
          {definitions.definition}
          <br />
          <em id="example">{definitions.example}</em>
        </li>
      </div>
    );
  });

  let newList = listInfo.filter(function (item, index) {
    return index < 4;
  });
  return (
    <div>
      <h4>{props.meaning.partOfSpeech}</h4>
      <ul>{newList}</ul>
    </div>
  );
}
