import React, { useEffect } from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';
import { createGlobalStyle } from 'styled-components';

import ThemeProvider, { useTheme } from '@brix-ui/theme';
import { ThemeMode } from '@brix-ui/theme/entity';
import fonts from '@brix-ui/fonts';

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
      <ThemeProvider
        theme={{
          typography: fonts,
        }}
      >
        <main>{StoryFn()}</main>

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
