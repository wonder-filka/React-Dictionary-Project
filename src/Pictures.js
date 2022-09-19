import React from "react";

export default function Pictures(props) {
  if (props.pictures) {
    return (
      <div className="Pictures">
        <div className="row">
          {props.pictures.photos.map(function (imgData, index) {
            if (index < 4) {
              return (
                <div key={index} className="col-md-3 p-3">
                  <img src={imgData.src.medium} className="img-fluid" />
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
