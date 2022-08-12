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

          <small class="hint">i.e Coffee, Gym, Rose</small>
        </section>

        <div className="Result"></div>
        <section>
          <h1>
            <Results />
          </h1>
        </section>

        <footer className="App-footer">coded by Shienny </footer>
      </div>
    </div>
  );
}
