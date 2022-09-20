import React from "react";
import "./App.css";

export default function Meaning(props) {
  let listInfo = props.meaning.definitions.map(function (definitions, index) {
    return (
      <li key="index">
        {definitions.definition}
        <br />
        <em id="example">{definitions.example}</em>
      </li>
    );
  });

  let newList = listInfo.filter(function (item, index) {
    return index < 4;
  });
  return (
    <div>
      <h5>{props.meaning.partOfSpeech}</h5>
      <ul className="listMeans">{newList}</ul>
    </div>
  );
}
