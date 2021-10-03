import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './Components/Pages/Projects';
import SignUp from './Components/Pages/Signup';
import About from './Components/Pages/About';
import './Components/Constants/Routes';
import Contact from './Components/Pages/Contact';


function App() {
  return (
    
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />

        </Switch>
      </Router>
    </>
  );
}

export default App;