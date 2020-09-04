export const minMax = (...[min, value, max]: [number, number, number]): number => {
  return Math.max(min, Math.min(value, max));
};
