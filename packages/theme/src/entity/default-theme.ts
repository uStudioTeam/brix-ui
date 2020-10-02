import { Breakpoint } from '@brix-ui/types/css';

export const defaultTheme = {
  breakpoints: {
    [Breakpoint.Xs]: 0,
    [Breakpoint.Sm]: 576,
    [Breakpoint.Md]: 768,
    [Breakpoint.Lg]: 992,
    [Breakpoint.Xl]: 1200,
  },
  transition: {
    short: 200,
    long: 400,
  },
};
