import React, { Component } from "react";
import Home from "./pages/Home";
import { getHacks } from "./services/getHacks";

class App extends Component {
  render() {
    return <Home hacks={getHacks()} />;
  }
}

export default App;
