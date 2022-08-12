import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    //documentation:https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001702b969ac30a4e2c8a6c688bdfe6ef9c";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&page=1&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1> Enter a word</h1>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search for a word"
            class="form-control search-input"
            onChange={handleKeywordChange}
          />
        </form>
        <div className="hint">ie:coffee, wine, sunset,...</div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
