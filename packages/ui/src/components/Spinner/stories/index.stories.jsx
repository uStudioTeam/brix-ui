import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { number, text, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React from 'react';

import Spinner from '../index';

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 0 } });

const spinnerStory = storiesOf('Spinner', module);

spinnerStory.add('Primary', () => (
  <Spinner
    appearance={{ size: number('Size', 32), color: text('Color', 'var(--c-primary)') }}
    delay={number('Appearance delay', 0)}
  />
));
