import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <h4 className="py-3">{props.result.word}</h4>
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
