import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from '../../Flex';

import EditableText from '../index';

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 1 } });

const editableTextStory = storiesOf('EditableText', module);

const StyledBox = styled(Flex)`
  background-color: var(--c-light);
  border-radius: var(--border-radius);
  padding: var(--i-regular);
  width: 100%;
  justify-content: center;
`;

editableTextStory.add('Primary', () => {
  const [value, setValue] = useState(
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    doloremagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
    idest laborum.`
  );

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
    <StyledBox>
      <EditableText
        variant={variant}
        onChange={setValue}
        appearance={appearance}
        isDisabled={boolean('Disabled', false)}
        defaultValue={text('Default value', 'Edit me')}
      >
        {value}
      </EditableText>
    </StyledBox>
  );
});
