import React, { FC } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import merge from 'lodash.merge';

import { useDestructure } from '@ustudio-ui/utils/hooks';

import Breakpoints from './breakpoints';
import Typography from './typography';
import Palette from './palette';
import Reset from './reset';

import type { Theme, ThemeOverride } from './theme';
import { defaultTheme } from './default-theme';

const ThemeProvider: FC<{ theme?: ThemeOverride }> = ({ children, theme = {} }) => {
  const finalTheme = useDestructure({ ...merge(theme, defaultTheme) }) as Theme;
  const {
    typography: { body, article, code },
    breakpoints,
  } = useDestructure(finalTheme);

  return (
    <SCThemeProvider theme={finalTheme}>
      {children}

      <Reset />

      <Palette override={theme?.palette} />
      <Breakpoints {...breakpoints} />
      <Typography {...{ body, article, code }} />
    </SCThemeProvider>
  );
};

export default ThemeProvider;
