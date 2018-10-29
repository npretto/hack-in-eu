import React, { Component } from "react";
import Home from "./pages/Home";
import hacks from "./data/hacks.json";
class App extends Component {
  render() {
    return <Home hacks={hacks} />;
  }
}

export default App;
