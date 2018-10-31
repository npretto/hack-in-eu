import React, { Component } from "react";
import HackCard from "../HackCard";

export class HackList extends Component {
  render() {
    const { hacks } = this.props;
    return (
      <div>
        {hacks.map((hack, i) => (
          <HackCard {...hack} key={i} />
        ))}
      </div>
    );
  }
}
