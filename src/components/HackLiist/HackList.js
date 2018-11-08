import format from "date-fns/format";
import React, { Component } from "react";
import HackCard from "../HackCard";
import s from "./HackList.module.scss";

export class HackList extends Component {
  render() {
    const { hacks } = this.props;
    return (
      <div className={s.HackList}>
        {/* ITERATE OVER YEARS */}

        {Object.entries(hacks).map(([year, data], i) => (
          <div className={s.Year} key={year}>
            <h1> {year}</h1>

            {/* ITERATE OVER MONTHS */}

            {Object.entries(data).map(([month, hacks], i) => (
              <div className={s.Month} key={month}>
                <h2> {format(`2000/${parseInt(month) + 1}/01`, "MMMM")}</h2>

                {/* ITERATE OVER HACKS */}

                {hacks.map((hack, i) => (
                  <HackCard {...hack} key={i} />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}
