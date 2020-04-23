import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React from 'react';
import styled from 'styled-components';

import Button from './button.component';

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 1 } });

const buttonsStory = storiesOf('Button', module);

const SContainer = styled.div`
  width: fit-content;
  margin: 1rem;
`;

buttonsStory.add('Primary', () => (
  <SContainer>
    <Button
      isLoading={boolean('Loading', false)}
      isDisabled={boolean('Disabled', false)}
      appearance={select('Appearance', ['text', 'contained', 'outlined'], 'contained')}
      intent={select('Intent', ['primary', 'positive', 'negative'], 'primary')}
    >
      {text('Button content', 'Button')}
    </Button>
  </SContainer>
));
