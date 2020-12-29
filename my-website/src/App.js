import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { Data } from './data/Data';

function App() {
  return (
    <Router>
      <Sidebar options={Data}/>
      <Navbar headers={Data}/>
    </Router>
  );
}

export default App;
