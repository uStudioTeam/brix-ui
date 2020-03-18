import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React from 'react';
import styled from 'styled-components';

import Meta from '../index';

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 1 } });

const metaStory = storiesOf('Meta', module);

const SContainer = styled.div`
  margin: 1rem;
`;

metaStory.add('Primary', () => (
  <SContainer>
    <Meta
      title={text('Title', 'Title')}
      children={text('Children', 'Value')}
      variant={select('Variant', ['small', 'large'], 'small')}
    />
  </SContainer>
));
