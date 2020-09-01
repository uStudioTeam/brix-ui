import type { Values, With } from '@ustudio-ui/utils/types';

import type { FontsFacesMap } from '../typography';
import type { BreakpointsMap } from '../breakpoints';
import { ColorsMap, ColorHelper } from '../palette';

import { ThemeMode } from './theme-mode';

export interface Theme {
  readonly typography: {
    readonly fontBody: string;
    readonly fontArticle: string;
    readonly fontCode: string;
  } & FontsFacesMap;

  readonly breakpoints: BreakpointsMap;

  readonly palette: ColorsMap;

  readonly colorHelper: ColorHelper;

  readonly mode: Values<typeof ThemeMode>;
  switchMode(mode?: Theme['mode']): void;
}

export interface ThemeOverride extends Omit<Partial<Theme>, 'colorHelper' | 'switch'> {
  readonly typography?: Partial<Theme['typography']>;

  readonly breakpoints?: Partial<Theme['breakpoints']>;

  readonly palette?: Partial<Record<Values<typeof ThemeMode>, Partial<Theme['palette']>>>;

  readonly mode?: Theme['mode'];
}

export type WithTheme<T = undefined> = With<T, { theme: Theme }>;
