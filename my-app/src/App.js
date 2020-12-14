import logo from './logo.svg';
import './App.css';

// Had issues with npx create-react-app my-app --> resorted to npm install -g create-react-app , create-react-app my-app
// https://github.com/facebook/create-react-app/issues/6512

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
