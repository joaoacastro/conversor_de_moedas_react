import React, { Component } from "react";
import "./App.css";
import "./AppResponsivo.css";
import Conversor from "./components/Conversor";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Conversor />
      </div>
    );
  }
}

export default App;
