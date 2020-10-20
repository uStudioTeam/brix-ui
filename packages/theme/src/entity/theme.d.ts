import type { DefaultTheme } from 'styled-components';
import type { Values, With } from '@brix-ui/utils/types';

import type { BreakpointsMap } from '../breakpoints';
import type { ColorsMap, ColorHelper } from '../palette';

import { ThemeMode } from './theme-mode';

export interface Theme {
  readonly breakpoints: BreakpointsMap;

  readonly palette: ColorsMap;

  readonly transition: Readonly<{
    short: number;
    long: number;
  }>;

  readonly colorHelper: ColorHelper;

  readonly mode: boolean;
  switchMode(mode?: boolean): void;
}

export interface ThemeOverride extends Omit<Partial<Theme>, 'colorHelper' | 'switch'> {
  readonly breakpoints?: Partial<Theme['breakpoints']>;

  readonly palette?: Partial<Record<Values<typeof ThemeMode>, Partial<Theme['palette']>>>;

  readonly transition?: Partial<Theme['transition']>;

  readonly mode?: Values<typeof ThemeMode>;
}

export type WithTheme<T = undefined> = With<T, { theme: DefaultTheme }>;
