import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    //documentation:https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
    </div>
  );
}
