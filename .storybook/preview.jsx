import React, { useEffect } from 'react';
import { jsxDecorator } from 'storybook-addon-jsx';

import ThemeProvider, { useTheme } from '@ustudio-ui/theme';
import { ThemeMode } from '@ustudio-ui/theme/entity';
import fonts from '@ustudio-ui/fonts';

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
    switchMode(context.globals.theme);
  }, [context.globals.theme]);

  return null;
};

export const decorators = [
  jsxDecorator,
  (story, context) => {
    return (
      <ThemeProvider
        theme={{
          typography: fonts,
        }}
      >
        {story()}

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
