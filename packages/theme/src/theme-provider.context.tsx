import React, { FC, useCallback, useState } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import merge from 'lodash.merge';

import type { Values } from '@ustudio-ui/utils/types';

import Breakpoints from './breakpoints';
import Typography from './typography';
import Palette, { ColorHelper, defaultPalette } from './palette';
import Reset from './reset';

import { ThemeMode, defaultTheme, Theme, ThemeOverride } from './entity';

const ThemeProvider: FC<{ theme?: ThemeOverride }> = ({ children, theme = {} }) => {
  const [themeMode, setThemeMode] = useState<Values<typeof ThemeMode>>(theme.mode || ThemeMode.Light);

  const switchMode = useCallback<Theme['switchMode']>(
    (mode) => {
      if (mode) {
        setThemeMode(mode);
      } else {
        setThemeMode(themeMode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light);
      }
    },
    [themeMode]
  );

  const overriddenTheme = {
    ...merge(
      { ...defaultTheme, palette: defaultPalette[themeMode] },
      { ...theme, palette: theme.palette?.[themeMode], mode: themeMode }
    ),
  } as Omit<Theme, 'colorHelper' | 'switchMode'>;

  const colorHelper = new ColorHelper(overriddenTheme.palette);

  const finalTheme = {
    ...overriddenTheme,
    colorHelper,
    switchMode,
  };

  const {
    typography: { body, article, code },
    breakpoints,
  } = finalTheme;

  return (
    <SCThemeProvider theme={finalTheme}>
      {children}

      <Reset />

      <Palette palette={finalTheme.palette} />
      <Breakpoints {...breakpoints} />
      <Typography {...{ body, article, code }} />
    </SCThemeProvider>
  );
};

export default ThemeProvider;
