import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact />
          </Switch>
        </Router>
      </>
     
    );
  }
}


// function App() {
//   return (
//     <>
//       <Router>
//         <navbar />
//         <Switch>
//           <Route path='/' exact />

//         </Switch>

//       </Router>
//     </>
//   )
// }
export default App;
