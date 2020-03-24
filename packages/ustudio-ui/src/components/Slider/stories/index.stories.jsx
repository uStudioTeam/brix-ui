import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { boolean, number, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React, { useState } from 'react';
import styled from 'styled-components';

import Slider from '../index';

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 1 } });

const sliderStory = storiesOf('Slider', module);

const SContainer = styled.div`
  margin: 0.5rem 0;
`;

sliderStory.add('Primary', () => {
  const [value, setValue] = useState(3);

  return (
    <SContainer>
      <Slider
        name="default"
        value={value}
        isDisabled={boolean('Disabled', false)}
        min={number('Min', 0)}
        max={number('Max', 10)}
        step={number('Step', 1)}
        displaySteps={boolean('Display steps', false)}
        stepLabels={{
          3: {
            label: 'bam',
          },
        }}
        onChange={inputValue => setValue(inputValue)}
      />
    </SContainer>
  );
});
