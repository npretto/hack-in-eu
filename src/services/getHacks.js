import hacks from "../data/hacks.json";
import differenceInCalendarMonths from "date-fns/difference_in_calendar_months";
import addMonths from "date-fns/add_months";

export const getHacks = () => {
  const withDates = hacks.map(h => ({
    ...h,
    startDate: new Date(h.startDate),
    endDate: new Date(h.endDate)
  }));

  const sorted = withDates.sort((a, b) => a.startDate - b.startDate);

  // const years = differenceInCalendarDays(
  //   sorted[sorted.length - 1].startDate,
  //   sorted[0].startDate
  // );

  const months = differenceInCalendarMonths(
    sorted[sorted.length - 1].startDate,
    sorted[0].startDate
  );
  const firstDate = sorted[0].startDate;

  console.log(firstDate.getMonth());

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
  console.log(skeleton);

  console.log(
    withDates.reduce((acc, hack) => {
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
    }, skeleton)
  );
  return sorted;
};
