import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Result(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="Result">
        <h4 className="mt-3">{props.result.word}</h4>
        <div className="row my-3">
          {props.result.phonetics.map(function (phonetics, index) {
            return (
              <div key={index} className="col-md-3">
                <Phonetics phonetics={phonetics} />
              </div>
            );
          })}
        </div>
        <div className="row">
          {props.result.meanings.map(function (meaning, index) {
            return (
              <div key={index} className="col-md-4">
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
