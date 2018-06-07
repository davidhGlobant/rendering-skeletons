import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import main from './Pages/main'
import Skeletor from './Pages/react-skeletor'
import Skeleton from './Pages/react-loading-skeleton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Route exact path="/" component={main} />
          <Route exact path="/Skeletor" component={Skeletor} />
          <Route exact path="/Skeleton" component={Skeleton} />
          </div>

        </Router>
      </div>
    );
  }
}

export default App;
