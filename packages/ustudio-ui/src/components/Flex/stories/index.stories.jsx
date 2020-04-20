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

  const marginLeft = select('Margin Left', ['small', 'medium', 'regular', 'large'], 'small');
  const marginRight = select('Margin Right', ['small', 'medium', 'regular', 'large'], 'small');
  const marginTop = select('Margin Top', ['small', 'medium', 'regular', 'large'], 'small');
  const marginBottom = select('Margin Bottom', ['small', 'medium', 'regular', 'large'], 'small');

  const paddingLeft = select('Padding Left', ['small', 'medium', 'regular', 'large'], 'small');
  const paddingRight = select('Padding Right', ['small', 'medium', 'regular', 'large'], 'small');
  const paddingTop = select('Padding Top', ['small', 'medium', 'regular', 'large'], 'small');
  const paddingBottom = select('Padding Bottom', ['small', 'medium', 'regular', 'large'], 'small');

  return (
    <Flex
      direction={direction}
      isReversed={boolean('Reverse direction', false)}
      isInline={boolean('Inline flex', false)}
      alignment={{
        horizontal: horizontalAlign,
        vertical: verticalAlign,
      }}
      margin={{
        left: marginLeft,
        right: marginRight,
        top: marginTop,
        bottom: marginBottom,
      }}
      padding={{
        left: paddingLeft,
        right: paddingRight,
        top: paddingTop,
        bottom: paddingBottom,
      }}
    >
      {text('Inner content', 'Default flex box')}
    </Flex>
  );
});
