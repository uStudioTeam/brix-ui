import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { array, boolean, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React, { useState } from 'react';

import RadioGroup from '../index';

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 0 } });

const radioGroupStory = storiesOf('RadioGroup', module);

radioGroupStory.add('Primary', () => {
  const options = ['1', '2', '3', '4', '5'];
  const [checked, setChecked] = useState(options[1]);

  return (
    <RadioGroup
      options={options}
      value={checked}
      disabledOptions={array('Disabled', [], ', ')}
      onChange={selected => setChecked(selected)}
      isReversed={boolean('Reverse labels', false)}
      name="Options"
    />
  );
});
