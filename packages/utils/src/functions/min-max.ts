export const minMax = (...[min, number, max]: [number, number, number]): number => {
  return Math.min(Math.max(min, number), max);
};
