import type { DefaultTheme } from 'styled-components';

import type { Values, With } from '@brix-ui/utils/types';

import type { BreakpointsMap } from '../roots/breakpoints';
import type { MiscellaneousProps } from '../roots/miscellaneous';
import type { ColorsMap, ColorHelper } from '../roots/palette';
import type { TypographyProps } from '../roots/typography';

import { ThemeMode } from './theme-mode';

export interface Theme {
  readonly breakpoints: BreakpointsMap;

  readonly palette: ColorsMap;

  readonly miscellaneous: MiscellaneousProps;

  readonly typography: TypographyProps;

  readonly colorHelper: ColorHelper;

  readonly mode: boolean;
  readonly modeString: Values<typeof ThemeMode>;
  switchMode(mode?: boolean): void;
}

export interface ThemeOverride extends Omit<Partial<Theme>, 'colorHelper' | 'switch' | 'modeString'> {
  readonly breakpoints?: Partial<Theme['breakpoints']>;

  readonly palette?: Partial<Record<Values<typeof ThemeMode>, Partial<Theme['palette']>>>;

  readonly miscellaneous?: Partial<
    Omit<MiscellaneousProps, 'transition'> & {
      transition?: Partial<MiscellaneousProps['transition']>;
    }
  >;

  readonly typography?: Partial<Omit<TypographyProps, 'font'>> & Partial<Pick<TypographyProps, 'font'>>;

  readonly mode?: Values<typeof ThemeMode>;
}

export type WithTheme<T = undefined> = With<T, { theme: DefaultTheme }>;
