import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React, { useState } from 'react';

import RadioGroup from '../index';

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 0 } });

const radioGroupStory = storiesOf('RadioGroup', module);

radioGroupStory.add('Primary', () => {
  const options = {
    1: {
      value: 1,
      label: 'One'
    },
    2: {
      value: 2,
      isDisabled: true
    },
    3: {
      value: '3'
    }
  };
  const [checked, setChecked] = useState(options[1]);

  return (
    <RadioGroup
      options={options}
      value={checked}
      onChange={selected => setChecked(selected)}
      isReversed={boolean('Reverse labels', false)}
      name="options"
    />
  );
});
