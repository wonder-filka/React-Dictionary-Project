import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <h4 className="my-3">
          <u>{props.result.word}</u>
        </h4>
        <div className="row">
          {props.result.phonetics.map(function (phonetics, index) {
            console.log(phonetics);
            if (phonetics.audio != "" && phonetics.text != "") {
              return (
                <div key={index} className="col-md-3">
                  <Phonetics phonetics={phonetics} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="row">
          {props.result.meanings.map(function (meaning, index) {
            return (
              <div key={index} className="col-md">
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
