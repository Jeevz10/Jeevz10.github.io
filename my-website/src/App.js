import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
class App extends Component {
  render() {
    return (
      <>
      <GlobalStyle />
       <Navbar />
       <Hero />
      </>
     
    );
  }
}

// class PreviousApp extends Component {
//   render() {
//     return (
//       <>
//         <Router>
//           <Navbar />
//           <Switch>
//             <Route path='/' exact />
//           </Switch>
//         </Router>
//       </>
     
//     );
//   }
// }


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
