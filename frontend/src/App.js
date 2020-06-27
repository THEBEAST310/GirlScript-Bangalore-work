import React from "react";
import "./App.css";
import Routes from './routes'
import { BrowserRouter, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Switch>
          { Routes }
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
