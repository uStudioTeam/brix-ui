import React, { useEffect } from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { createGlobalStyle } from 'styled-components';

import ThemeProvider, { useTheme } from '@brix-ui/theme';
import Fonts from '@brix-ui/fonts';
import { ThemeMode } from '@brix-ui/theme/entity';

export const globalTypes = {
  theme: {
    name: 'Theme',
    defaultValue: ThemeMode.Light,
    toolbar: {
      icon: 'circlehollow',
      items: Object.values(ThemeMode),
    },
  },
};

const ThemeSwitcher = ({ context }) => {
  const { switchMode } = useTheme();

  useEffect(() => {
    switchMode(context.globals.theme === ThemeMode.Light);
  }, [context.globals.theme]);

  return null;
};

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    width: 100%;
  }

  main {
    flex-grow: 1;
  }
`;

export const decorators = [
  jsxDecorator,
  (StoryFn, context) => {
    return (
      <ThemeProvider>
        <main>{StoryFn()}</main>

        <Fonts />
        <GlobalStyle />
        <ThemeSwitcher context={context} />
      </ThemeProvider>
    );
  },
];

export const parameters = {
  controls: {
    expanded: true,
  },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
};
