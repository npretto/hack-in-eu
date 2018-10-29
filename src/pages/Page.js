import React, { Component } from "react";

export default class Page extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <header>header</header>
        <div>{children}</div>
      </div>
    );
  }
}
