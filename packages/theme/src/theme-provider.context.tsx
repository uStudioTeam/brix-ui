import React, { FC } from 'react';
import { DefaultTheme, ThemeProvider as SCThemeProvider } from 'styled-components';

import { useDestructure } from '@ustudio-ui/utils/hooks';

import Typography from './typography';
import Reset from './reset';

const ThemeProvider: FC<{ theme: DefaultTheme }> = ({ children, theme }) => {
  const { body, article, code } = useDestructure(theme);

  return (
    <SCThemeProvider theme={theme}>
      {children}

      <Reset />

      <Typography body={body} article={article} code={code} />
    </SCThemeProvider>
  );
};

export default ThemeProvider;
