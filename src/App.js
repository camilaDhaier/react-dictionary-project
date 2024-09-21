import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>Coded by Camila Dhaier and it is <a href="https://github.com/camilaDhaier/react-dictionary-project" target="blank"> Open-sourced</a></small>
        </footer>
      </div>
    </div>
  );
}