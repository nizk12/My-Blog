import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
        </a>
        <h1>Raven</h1>
        <p>Its my brand name</p>
      </header>
    </div>
  );
}

export default App;
