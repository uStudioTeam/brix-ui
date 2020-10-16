import { safeFallback } from './safe-fallback';

export const classNames = (...classes: [string, ...Array<string | undefined>]): string => {
  return (classes.reduce((interpolation, className) => {
    return `${interpolation} ${safeFallback(className)}`;
  }, '') as string).trim();
};
