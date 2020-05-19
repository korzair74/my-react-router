import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import Home from './components/home'
import Contact from './components/contact';
import About from './components/about';
import Blog from './components/blog'
import Navbar from './components/navbar'
import NoMatch from './components/nomatch'

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/contact'  component={Contact} />
            <Route path='/about'  component={About} />
            <Route path='/blog'  component={Blog} />
            <Route component={NoMatch} />
          </Switch>
      </div>
    </Router>
  )
};



export default App;
