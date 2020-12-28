import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';
// class App extends Component {
//   render() {
//     return (
//       <>
//       <GlobalStyle />
//        <Navbar />
//        <Dropdown />
//        <Hero slides={SliderData} />
//       </>
     
//     );
//   }
// }

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


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData} />
      <InfoSection />
    </>
  )
}
export default App;
