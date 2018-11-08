import React, { Component } from "react";
import Home from "./pages/Home";
import { getSplittedHacks } from "./services/getHacks";

class App extends Component {
  render() {
    return <Home hacks={getSplittedHacks()} />;
  }
}

export default App;
