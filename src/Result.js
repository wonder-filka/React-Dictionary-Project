import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="Result">
        <h4>{props.result.word}</h4>
        <div className="container-fluid">
          <div className="row">
            {props.result.meanings.map(function (meaning, index) {
              return (
                <div key={index} className="col">
                  <Meaning meaning={meaning} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
