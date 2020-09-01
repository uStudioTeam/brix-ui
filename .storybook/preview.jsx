import React, { useEffect } from 'react';

import ThemeProvider, { useTheme } from '@ustudio-ui/theme';
import { ThemeMode } from '@ustudio-ui/theme/entity';

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
  (story, context) => {
    return (
      <ThemeProvider>
        {story()}

        <ThemeSwitcher context={context} />
      </ThemeProvider>
    );
  },
];
