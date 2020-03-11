import { addDecorator, addParameters, storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React from 'react';
import styled from 'styled-components';

import Text from '../../Text';

import Dropdown from '../index';

addDecorator(withKnobs);
addDecorator(jsxDecorator);
addParameters({ jsx: { skip: 1 } });

const dropdownStory = storiesOf('Dropdown', module);

const SContainer = styled.div`
  margin: 1rem;
`;

dropdownStory.add('Primary', () => (
  <SContainer>
    <Dropdown name="Outer dropdown" isDisabled={boolean('Disabled', false)} title="Dropdown title">
      <>
        <Text>Dropdown content</Text>

        <Dropdown name="Inner dropdown" title="Dropdown title">
          <>
            <Text>Dropdown content</Text>
            <Text>Dropdown content</Text>
          </>
        </Dropdown>

        <Dropdown name="Inner dropdown" title="Dropdown title">
          <>
            <Text>Dropdown content</Text>
            <Text>Dropdown content</Text>
          </>
        </Dropdown>

        <Dropdown name="Inner dropdown" title="Dropdown title">
          <>
            <Text>Dropdown content</Text>
            <Text>Dropdown content</Text>
          </>
        </Dropdown>

        <Dropdown name="Inner dropdown" title="Dropdown title">
          <>
            <Text>Dropdown content</Text>
            <Text>Dropdown content</Text>
          </>
        </Dropdown>
      </>
    </Dropdown>
  </SContainer>
));
