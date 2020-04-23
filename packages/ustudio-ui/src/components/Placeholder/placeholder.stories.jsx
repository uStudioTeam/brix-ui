import { addDecorator, storiesOf } from '@storybook/react';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React from 'react';

import Placeholder from './placeholder.component';

addDecorator(withKnobs);
addDecorator(jsxDecorator);

const placeholderStory = storiesOf('Placeholder', module);

placeholderStory.add('Primary', () => (
  <Placeholder
    variant={select('Variant', ['block', 'text'], 'block')}
    appearance={{
      width: text('Width', '10rem'),
      height: text('Height', '10rem'),
      borderRadius: text('Border radius', 'var(--border-radius)'),
    }}
  />
));
