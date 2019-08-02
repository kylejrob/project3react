import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Scores from "./pages/Scores";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/scores" component={Scores} />
      </div>
    </Router>
  );
}

export default App;
