import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React, { useState } from 'react';
import styled from 'styled-components';

import Checkbox from '../index';

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 1 } });

const checkboxStory = storiesOf('Checkbox', module);

const SContainer = styled.div`
  margin: 1rem;
`;

checkboxStory.add('Primary', () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <SContainer>
      <Checkbox
        isDisabled={boolean('Disabled', false)}
        name="Default"
        value={isChecked}
        onChange={setChecked}
      />
    </SContainer>
  );
});
