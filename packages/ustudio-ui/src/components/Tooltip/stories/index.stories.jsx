import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React from 'react';

import Text from '../../Text';

import Tooltip from '../index';

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 1 } });

const tooltipStory = storiesOf('Tooltip', module);

tooltipStory.add('Primary', () => (
  <div>
    <Text>Some text existing there</Text>
    <Text>Another text</Text>
    <Text>
      Hello,{' '}
      <Tooltip position={select('Position', ['top', 'bottom', 'left', 'right'], 'top')} value="Tooltip">
        <span>i am here</span>
      </Tooltip>
    </Text>
  </div>
));
