import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React, { useState } from 'react';
import styled from 'styled-components';

import Switch from '../index';

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 1 } });

const switchStory = storiesOf('Switch', module);

const SContainer = styled.div`
  margin: 1rem;
`;

switchStory.add('Primary', () => {
  const [isOn, setOn] = useState(false);

  return (
    <SContainer>
      <Switch
        name="Switch"
        isDisabled={boolean('Disabled', false)}
        alternative={boolean('Alternative', false)}
        value={isOn}
        onChange={setOn}
      />
    </SContainer>
  );
});
