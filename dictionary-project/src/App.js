import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";
import Results from "./Results";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <section>
          <main>
            <Dictionary />
          </main>
        </section>

        <div className="Result"></div>
        <section>
          <h1>
            <Results />
          </h1>
        </section>

        <footer className="App-footer">
          This project was coded by Shienny and is open sourced on{" "}
          <a
            href="https://github.com/Shieta/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
            title="View github repository"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://62f5bd3a71da8553e7da2c4d--bespoke-kelpie-05e8f2.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            title="Go to Netlify"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
