import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React from 'react';
import styled from 'styled-components';

import Tag from '../index';

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 1 } });

const tagStory = storiesOf('Tag', module);

const SContainer = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-gap: var(--i-small);
`;

tagStory.add('Primary', () => {
  const background = text('Background', 'var(--g-primary)');
  const color = text('Color', 'var(--c-lightest)');

  return (
    <SContainer>
      {['news', 'content', 'image', 'bla', 'tag'].map(tag => (
        <li key={tag}>
          <Tag appearance={{ background, color }}>{tag}</Tag>
        </li>
      ))}
    </SContainer>
  );
});
