import React, { FC, useMemo } from 'react';
import PT, { Validator } from 'prop-types';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import merge from 'lodash.merge';

import { record } from '@brix-ui/prop-types/utils';
import { applyPolymorphicFunctionProp, objectValues } from '@brix-ui/utils/functions';
import { Breakpoint } from '@brix-ui/types/css';
import { Color } from '@brix-ui/types/palette';

import { useThemeMode } from '../hooks';

import { Reset, Palette, Typography, Breakpoints, Miscellaneous } from '../roots';
import { Theme, ThemeMode, ThemeOverride, defaultTheme } from '../entity';
import { ColorHelper, defaultPalette } from '../roots/palette';

import type { ThemeProviderProps } from './theme-provider.props';

const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme = {} }) => {
  const [themeMode, switchMode] = useThemeMode(theme.mode);

  const {
    palette: paletteOverride = {},
    breakpoints: breakpointsOverride = {},
    miscellaneous: miscelaneousOverride = {},
    typography: typographyOverride = {},
  } = theme;

  const finalTheme = useMemo<Theme>(() => {
    if (themeMode !== undefined) {
      const palette = {
        ...defaultPalette[themeMode],
        ...paletteOverride[themeMode],
      };

      const colorHelper = new ColorHelper(palette);

      return {
        palette,
        breakpoints: {
          ...defaultTheme.breakpoints,
          ...breakpointsOverride,
        },
        miscellaneous: {
          ...merge(
            {
              ...defaultTheme.miscellaneous,
            },
            {
              ...miscelaneousOverride,
            }
          ),
        },
        typography: {
          ...defaultTheme.typography,
          ...typographyOverride,
        },
        mode: themeMode === ThemeMode.Light,
        modeString: themeMode,
        switchMode,
        colorHelper,
      };
    }

    return {} as Theme;
  }, [themeMode, JSON.stringify(theme)]);

  return themeMode === undefined ? null : (
    <SCThemeProvider theme={finalTheme}>
      {applyPolymorphicFunctionProp(children, finalTheme)}

      <Reset />
      <Typography />
      <Miscellaneous />
      <Palette />
      <Breakpoints />
    </SCThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: PT.oneOfType([PT.node, PT.func]),
  theme: PT.exact({
    breakpoints: PT.exact(record(objectValues(Breakpoint), PT.number)),
    palette: PT.exact(record(objectValues(ThemeMode), PT.exact(record(objectValues(Color), PT.string)))),
    mode: PT.oneOf(objectValues(ThemeMode)),
  }) as Validator<ThemeOverride>,
};

export default ThemeProvider;
