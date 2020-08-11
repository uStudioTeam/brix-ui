import type { With } from '@ustudio-ui/utils/types';

import type { FontsFacesMap } from './typography';
import type { BreakpointsMap } from './breakpoints';
import type { ColorsMap } from './palette';

export interface Theme {
  typography: {
    fontBody: string;
    fontArticle: string;
    fontCode: string;
  } & FontsFacesMap;

  breakpoints: BreakpointsMap;

  palette: ColorsMap;
}

export interface ThemeOverride extends Partial<Theme> {
  typography?: Partial<Theme['typography']>;

  breakpoints?: Partial<Theme['breakpoints']>;

  palette?: Partial<Theme['palette']>;
}

export type WithTheme<T = undefined> = With<T, { theme: Theme }>;
