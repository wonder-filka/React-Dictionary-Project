import React from "react";

export default function Synonyms(props) {
  console.log(props.synonyms);
  return (
    <ul className="Synonyms">
      <h5>Synonyms: </h5>
      {props.synonyms.map(function (synonymsValue, index) {
        return <li key={index}>{synonymsValue} </li>;
      })}
    </ul>
  );
}
