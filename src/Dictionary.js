import React, { useState } from "react";
import axios from "axios";
import Result from "./Result.js";
import Pictures from "./Pictures.js";

export default function Dictionary() {
  let [serchValue, setSerchValue] = useState("");
  let [resultValue, setResultValue] = useState(null);
  let [picturesSearch, setPicturesSearch] = useState("");

  function getApiData(response) {
    setResultValue(response.data[0]);
  }

  function getImages(response) {
    setPicturesSearch(response.data);
  }

  function serchEnter(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${serchValue}`;
    axios.get(apiUrl).then(getApiData);

    let PexelsApi = `563492ad6f91700001000001ca68f5af2c2b458b884dc6a3a576c993`;
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${serchValue}&per_page1&orientation=landscape`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${PexelsApi}` } })
      .then(getImages);
  }

  function handleChangeSearch(event) {
    setSerchValue(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1 className="py-1">What word do you want to look up?</h1>
      <form onSubmit={serchEnter}>
        <input type="search" autoFocus="true" onChange={handleChangeSearch} />
      </form>
      <span>i.e. paris, wine, yoga, coding</span>
      <Result result={resultValue} />
      <Pictures pictures={picturesSearch} />
    </div>
  );
}
