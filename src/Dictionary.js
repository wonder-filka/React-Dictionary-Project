import React, { useState } from "react";
import axios from "axios";
import Result from "./Result.js";

export default function Dictionary() {
  let [serchValue, setSerchValue] = useState("");
  let [resultValue, setResultValue] = useState(null);

  function getApiData(response) {
    setResultValue(response.data[0]);
  }

  function serchEnter(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${serchValue}`;
    axios.get(apiUrl).then(getApiData);
  }

  function handleChangeSearch(event) {
    setSerchValue(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1 className="py-3">What word do you want to look up?</h1>
      <form onSubmit={serchEnter}>
        <input type="search" autoFocus="true" onChange={handleChangeSearch} />
      </form>
      <Result result={resultValue} />
    </div>
  );
}
