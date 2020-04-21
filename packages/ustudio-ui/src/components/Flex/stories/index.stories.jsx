import { addDecorator, storiesOf } from '@storybook/react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React from 'react';

import Flex from '../index';

addDecorator(withKnobs);
addDecorator(jsxDecorator);

const flexStory = storiesOf('Flex', module);

flexStory.add('Primary', () => {
  const direction = select('Direction', ['row', 'column'], 'row');
  const verticalAlign = select(
    'Vertical align',
    ['start', 'end', 'center', 'stretch', 'space-between', 'space-around'],
    'center'
  );
  const horizontalAlign = select(
    'Horizontal align',
    ['start', 'end', 'center', 'stretch', 'space-between', 'space-around'],
    'center'
  );

  const indentOptions = ['small', 'medium', 'regular', 'large'];
  const positions = ['left', 'right', 'top', 'bottom'];

  const indents = type =>
    positions.reduce((accPositions, position) => {
      return { ...accPositions, [position]: select(`${type} ${position}`, indentOptions, 'small') };
    }, {});

  return (
    <>
    <Flex
      direction={direction}
      isReversed={boolean('Reverse direction', false)}
      isInline={boolean('Inline flex', false)}
      alignment={{
        horizontal: horizontalAlign,
        vertical: verticalAlign,
      }}
      margin={indents('Margin')}
      padding={indents('Padding')}
    >
      {text('Inner content', 'Default flex box')}
    </Flex>

      <Flex as="header">Header</Flex>
      <Flex as="nav">Nav</Flex>
      <Flex as="main">Main</Flex>
      <Flex as="section">Section</Flex>
      <Flex as="footer">Footer</Flex>
      <Flex as="aside">Aside</Flex>
      </>
  );
});
