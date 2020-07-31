import React, { FC } from 'react';
import { ThemeProvider as SCThemeProvider, useTheme as useSCTheme } from 'styled-components';

import { useDestructure } from '@ustudio-ui/utils/hooks';

import Breakpoints from './breakpoints';
import Typography from './typography';
import Reset from './reset';

import type { Theme, WithTheme } from './theme';

const ThemeProvider: FC<Partial<WithTheme>> = ({ children, theme = {} as Theme }) => {
  const { body, article, code, xs, sm, md, lg, xl } = useDestructure(theme);

  return (
    <SCThemeProvider theme={theme}>
      {children}

      <Reset />

      <Breakpoints xs={xs} sm={sm} md={md} lg={lg} xl={xl} />
      <Typography body={body} article={article} code={code} />
    </SCThemeProvider>
  );
};

export const useTheme = (): Theme => useSCTheme();

export default ThemeProvider;
