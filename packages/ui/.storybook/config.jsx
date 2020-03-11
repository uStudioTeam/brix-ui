import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';

import './fonts.css';

import { ThemeProvider } from '../src/theme';

function withTheme(story) {
  return (
    <>
      <ThemeProvider>
        {story()}
      </ThemeProvider>
    </>
  );
}

addParameters({
  name: 'uStudio UI Kit',
  showStoriesPanel: true,
  showAddonPanel: true,
  sidebarAnimations: true,
});

addDecorator(withTheme);

configure(require.context('../src', true, /\.stories\.jsx$/), module);
