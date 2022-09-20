import React, { useState } from "react";
import axios from "axios";
import Result from "./Result.js";
import Pictures from "./Pictures.js";
import "./App.css";

export default function Dictionary(props) {
  let [serchValue, setSerchValue] = useState(props.defaultKeyword);
  let [resultValue, setResultValue] = useState(null);
  let [picturesSearch, setPicturesSearch] = useState("");
  let [loaded, setLoaded] = useState(false);

  function getApiData(response) {
    setResultValue(response.data[0]);
  }

  function getImages(response) {
    setPicturesSearch(response.data);
    console.log(picturesSearch);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${serchValue}`;
    axios.get(apiUrl).then(getApiData);

    let pexelsApiKey = `563492ad6f91700001000001ca68f5af2c2b458b884dc6a3a576c993`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${serchValue}&per_page1&orientation=landscape`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(getImages);
  }

  function serchEnter(event) {
    event.preventDefault();
    search();
  }

  function handleChangeSearch(event) {
    setSerchValue(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1 className="py-1">What word do you want to look up?</h1>
        <form onSubmit={serchEnter}>
          <input
            type="search"
            autoFocus="true"
            defaultValue={props.defaultKeyword}
            onChange={handleChangeSearch}
            className="formInput col-md-3 my-1"
          />
        </form>
        <span id="labelInput">i.e. flower, wine, yoga, coding</span>
        <Result result={resultValue} />
        <Pictures pictures={picturesSearch} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
