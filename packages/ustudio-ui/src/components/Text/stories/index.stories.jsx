import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React from 'react';
import styled from 'styled-components';

import Text from '../index';

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 1 } });

const textStory = storiesOf('Text', module);

const SContainer = styled.div`
  margin: 1rem;
`;

textStory.add('Primary', () => {
  const variant = select(
    'Variant',
    ['small', 'body', 'article', 'caption', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1'],
    'body'
  );
  const appearance =
    variant === 'article' || variant === 'body'
      ? variant === 'article'
        ? select('Appearance', ['regular', 'underlined', 'italic'], 'regular')
        : select('Appearance', ['regular', 'underlined', 'italic', 'bold'], 'regular')
      : undefined;

  return (
    <SContainer>
      <Text variant={variant} appearance={appearance} id="id" data-testid="test-id">
        {variant.slice(0, 1).toUpperCase() + variant.slice(1)}
      </Text>

      <Text color={text('Color', 'var(--c-primary)')} align="center">Colored text</Text>
    </SContainer>
  );
});
