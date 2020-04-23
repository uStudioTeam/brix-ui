import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React from 'react';

import Progress from './progress.component';

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 1 } });

const progressStory = storiesOf('Progress', module);

progressStory.add('Primary', () => <Progress max={100} value={number('Value', 50)} />);
