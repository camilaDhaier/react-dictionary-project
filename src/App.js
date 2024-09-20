import logo from './shecodes-logo.gif';
import './App.css';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="container">
    <div className="App">
      <header className="App-header">
        <img src={logo}
        className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>



      <footer className="App-footer">
        <small >Coded by Camila Dhaier </small>
        </footer>
    </div>
    </div>
  );
}

export default App;
