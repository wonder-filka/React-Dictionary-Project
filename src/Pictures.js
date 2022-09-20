import React from "react";
import "./App.css";

export default function Pictures(props) {
  if (props.pictures) {
    return (
      <div className="Pictures">
        <div className="row">
          {props.pictures.photos.map(function (imgData, index) {
            if (index < 8) {
              return (
                <div key={index} className="col-lg-3 p-3">
                  <img src={imgData.src.medium} className="img-fluid image" />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
