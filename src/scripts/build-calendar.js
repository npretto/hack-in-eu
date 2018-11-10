import fs from "fs";
import ical from "ical-generator";
import { getHacks } from "../services/getHacks";

const hacks = getHacks();

const calendar = ical();

calendar.events(
  hacks.map(hack => ({
    start: hack.startDate,
    end: hack.endDate,
    summary: hack.name,
    description: hack.description,
    location: `${hack.location.city}, ${hack.location.country}`,
    url: hack.url,
    allDay: true
  }))
);

// console.log(calendar.toString());

fs.writeFileSync("./public/hacks-in-eu.ics", calendar.toString());
fs.writeFileSync("./public/hack-in-eu.ics", calendar.toString());
