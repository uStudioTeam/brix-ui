import React, { FC, useMemo } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import merge from 'lodash.merge';

import Breakpoints from './breakpoints';
import Typography from './typography';
import Palette, { ColorHelper, defaultPalette } from './palette';
import Reset from './reset';

import { defaultTheme, Theme, ThemeMode, ThemeOverride } from './entity';
import { useThemeMode } from './hooks';

const ThemeProvider: FC<{ theme?: ThemeOverride }> = ({ children, theme = {} }) => {
  const [themeMode, switchMode] = useThemeMode(theme);

  const finalTheme = useMemo<Theme>(() => {
    if (themeMode !== undefined) {
      const overriddenTheme = {
        ...merge(
          { ...defaultTheme },
          {
            ...theme,
            palette: {
              ...defaultPalette[themeMode],
              ...(theme.palette?.[themeMode] || {}),
            },
            mode: themeMode === ThemeMode.Light,
          }
        ),
      } as Omit<Theme, 'colorHelper' | 'switchMode'>;

      const colorHelper = new ColorHelper(overriddenTheme.palette);

      return {
        ...overriddenTheme,
        colorHelper,
        switchMode,
      };
    }

    return {} as Theme;
  }, [themeMode, JSON.stringify(theme)]);

  return themeMode === undefined ? null : (
    <SCThemeProvider theme={finalTheme}>
      {children}

      <Reset />

      <Palette palette={finalTheme.palette} />
      <Breakpoints {...finalTheme.breakpoints} />
      <Typography {...finalTheme.typography} />
    </SCThemeProvider>
  );
};

export default ThemeProvider;
