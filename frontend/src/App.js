import React from "react";
import "./App.css";
import Routes from './routes'
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        { Routes }
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
