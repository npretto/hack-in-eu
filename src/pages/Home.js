import React, { Component } from "react";
import HackList from "../components/HackLiist/";

export default class Home extends Component {
  render() {
    const { hacks } = this.props;
    return (
      <div>
        <h1> Hackathons in europe: </h1>
        <HackList hacks={hacks} />
        <br />
        <br />
        <br />
        <a href="https://github.com/npretto/hack-in-eu">
          Want to add or edit an hackathon? fork me on github
        </a>
      </div>
    );
  }
}
