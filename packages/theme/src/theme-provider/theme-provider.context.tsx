import React, { FC, useMemo } from 'react';
import PT, { Validator } from 'prop-types';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import merge from 'lodash.merge';

import { record } from '@brix-ui/prop-types/utils';
import { applyPolymorphicFunctionProp, objectValues } from '@brix-ui/utils/functions';
import { Breakpoint } from '@brix-ui/types/css';
import { Color } from '@brix-ui/types/palette';
import { FontVariant, FontWeight, TypeVariant } from '@brix-ui/types/typography';

import { Reset, Palette, Typography, Breakpoints, Miscelaneous, ColorHelper, defaultPalette } from '../roots';
import { defaultTheme, Theme, ThemeMode, ThemeOverride } from '../entity';
import { useThemeMode } from '../hooks';

import type { ThemeProviderProps } from './theme-provider.props';

const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme = {} }) => {
  const [themeMode, switchMode] = useThemeMode(theme);

  const { palette: overridePalette = {}, ...override } = theme;

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
      {applyPolymorphicFunctionProp(children, finalTheme)}

      <Reset />
      <Typography />
      <Miscelaneous transition={finalTheme.transition} />
      <Palette palette={finalTheme.palette} />
      <Breakpoints {...finalTheme.breakpoints} />
    </SCThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: PT.oneOfType([PT.node, PT.func]),
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
