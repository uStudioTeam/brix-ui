import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React from 'react';
import styled from 'styled-components';

import Badge from './badge.component';

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 1 } });

const badgeStory = storiesOf('Badge', module);

const SContainer = styled.div`
  width: fit-content;
  margin: 1rem;
`;

badgeStory.add('Primary', () => (
  <SContainer>
    <Badge
      isDisabled={boolean('Disabled', false)}
      appearance={{
        background: text('Background', 'var(--c-primary)'),
        color: text('Color', 'var(--c-lightest)'),
      }}
    >
      {text('Content', 'Badge')}
    </Badge>
  </SContainer>
));
