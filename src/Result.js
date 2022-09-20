import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./App.css";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <h4 className="my-3">{props.result.word}</h4>
        <div className="phoneticsAudio">
          {props.result.phonetics.map(function (phonetics, index) {
            console.log(phonetics.text);
            if (
              phonetics.text != "" &&
              phonetics.audio != "" &&
              phonetics.text != null &&
              phonetics.audio != null
            ) {
              return (
                <div key={index}>
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
              <div key={index} className="col-md py-3">
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
