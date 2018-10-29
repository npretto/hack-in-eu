import React, { Component } from "react";

import format from "date-fns/format";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import s from "./HackCard.module.scss";

export class HackCard extends Component {
  render() {
    const {
      name,
      url,
      description,
      location,
      startDate,
      endDate,
      headerImage
    } = this.props;
    return (
      <div className={s.HackCard}>
        <div className={s.startDate}>
          <div className={s.day}>{format(startDate, "D")}</div>
          <div className={s.month}>{format(startDate, "MMM")}</div>
          <div className={s.year}>{format(startDate, "YYYY")}</div>
        </div>
        <div className={s.content}>
          <div className={s.contentMain}>
            <div className={s.header}>
              <Typography variant="h4">{name}</Typography>

              <Typography variant="subtitle1">
                {`${location.city}, ${location.country}               `}
              </Typography>
              <Typography variant="subtitle2">
                {`${format(startDate, "ddd D MMM")} - ${format(
                  endDate,
                  "ddd D MMM"
                )}`}
              </Typography>
            </div>
            <div>
              {/* <Typography variant="body1" gutterBottom>
                {description}
              </Typography> */}
            </div>
          </div>
          <div className={s.contentFooter}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <Button size="small"> Visit Website </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
