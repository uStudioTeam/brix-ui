import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React from 'react';
import styled from 'styled-components';

import Avatar from '../index';

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 1 } });

const avatarStory = storiesOf('Avatar', module);

const SContainer = styled.div`
  margin: 1rem;
`;

avatarStory.add('Primary', () => (
  <SContainer>
    <Avatar
      isDisabled={boolean('Disabled', false)}
      appearance={{
        background: text('Background', 'var(--c-primary)'),
        color: text('Text color', 'var(--c-lightest)'),
        size: select('Size', ['small', 'medium', 'large'], 'medium'),
      }}
    >
      {text('Content', 'Avatar Content')}
    </Avatar>
  </SContainer>
));
