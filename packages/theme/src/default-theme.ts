import { Breakpoint } from '@ustudio-ui/types/css';

import { defaultPalette } from './palette';

export const defaultTheme = {
  typography: {
    fontBody: 'Source Sans Pro',
    fontArticle: 'Merriweahter',
    fontCode: 'Inconsolata',
  },

  breakpoints: {
    [Breakpoint.Xs]: 0,
    [Breakpoint.Sm]: 576,
    [Breakpoint.Md]: 768,
    [Breakpoint.Lg]: 992,
    [Breakpoint.Xl]: 1200,
  },

  palette: defaultPalette,
};
