import React, { FC, useMemo } from 'react';
import PT, { Validator } from 'prop-types';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import merge from 'lodash.merge';

import { record } from '@ustudio-ui/prop-types/utils';
import { objectValues } from '@ustudio-ui/utils/functions';
import { Breakpoint } from '@ustudio-ui/types/css';
import { Color } from '@ustudio-ui/types/palette';
import { FontVariant, FontWeight, TypeVariant } from '@ustudio-ui/types/typography';

import Breakpoints from './breakpoints';
import Typography from './typography';
import Palette, { ColorHelper, defaultPalette } from './palette';
import Reset from './reset';

import { defaultTheme, Theme, ThemeMode, ThemeOverride } from './entity';
import { useThemeMode } from './hooks';

const ThemeProvider: FC<{ theme?: ThemeOverride }> = ({ children, theme = {} }) => {
  const [themeMode, switchMode] = useThemeMode(theme);

  const { typography: overrideTypography = {}, palette: overridePalette = {}, ...override } = theme;

  const finalTheme = useMemo<Theme>(() => {
    if (themeMode !== undefined) {
      const overriddenTheme = {
        ...merge(
          { ...defaultTheme },
          {
            ...override,
            palette: {
              ...defaultPalette[themeMode],
              ...(overridePalette[themeMode] || {}),
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
      <Typography {...overrideTypography} />
    </SCThemeProvider>
  );
};

ThemeProvider.propTypes = {
  theme: PT.exact({
    breakpoints: PT.exact(record(objectValues(Breakpoint), PT.number)),
    palette: PT.exact(record(objectValues(Color), PT.string)),
    mode: PT.oneOf(objectValues(ThemeMode)),
    typography: PT.exact({
      ...record(['fontBody', 'fontArticle', 'fontCode'], PT.string),
      ...record(
        objectValues(FontVariant),
        PT.exact(
          record(
            objectValues(TypeVariant),
            PT.exact({
              url: PT.string.isRequired,
              weight: PT.oneOf(objectValues(FontWeight)).isRequired,
              format: PT.string,
            })
          )
        )
      ),
    }),
  }) as Validator<ThemeOverride>,
};

export default ThemeProvider;
