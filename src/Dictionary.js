import React, { useState } from "react";

export default function Dictionary() {
  let [serchValue, setSerchValue] = useState("");

  function serchEnter(event) {
    event.preventDefault();
    alert(`Seraching for ${serchValue}`);
  }

  function handleChangeSearch(event) {
    setSerchValue(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>What word do you want to look up?</h1>
      <form onSubmit={serchEnter}>
        <input type="search" autoFocus="true" onChange={handleChangeSearch} />
      </form>
    </div>
  );
}
