import hacks from "../data/hacks.json";
import differenceInCalendarMonths from "date-fns/difference_in_calendar_months";
import addMonths from "date-fns/add_months";

export const getHacks = () => {
  return hacks
    .map(hack => ({
      ...hack,
      startDate: new Date(hack.startDate),
      endDate: new Date(hack.endDate)
    }))
    .sort((a, b) => a.startDate - b.startDate);
};

export const getSplittedHacks = () => {
  const sorted = getHacks();

  const months = differenceInCalendarMonths(
    sorted[sorted.length - 1].startDate,
    sorted[0].startDate
  );
  const firstDate = sorted[0].startDate;

  //empty skeleton to not have any problem with undefineds later on
  const skeleton = [...Array(months + 1).keys()].reduce((acc, i) => {
    const date = addMonths(firstDate, i);
    const year = date.getFullYear();
    const month = date.getMonth();
    return {
      ...acc,
      [year]: {
        ...acc[year],
        [month]: []
      }
    };
  }, {});
  // console.log(skeleton);

  const splitted = sorted.reduce((acc, hack) => {
    const year = hack.startDate.getFullYear();
    const month = hack.startDate.getMonth();
    // return { ...acc, [year]: [...(acc[year] || []), hack] };
    return {
      ...acc,
      [year]: {
        ...acc[year],
        [month]: [...acc[year][month], hack]
      }
    };
  }, skeleton);

  // console.log(">>>>");
  // console.log(splitted);

  return splitted;
};
