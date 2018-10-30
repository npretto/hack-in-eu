import hacks from "../data/hacks.json";

export const getHacks = () => {
  return hacks.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
};
