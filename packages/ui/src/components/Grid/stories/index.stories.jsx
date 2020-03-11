import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React from 'react';
import styled from 'styled-components';

import Grid from '../Grid';
import Cell from '../Cell';

import Flex from '../../Flex';

const gridStory = storiesOf('Grid', module);

const StyledBox = styled(Flex)`
  background-color: var(--c-light);
  border-radius: var(--border-radius);
  padding: var(--i-regular);
  width: 100%;
  justify-content: center;
`;

gridStory
  .addDecorator(jsxDecorator)
  .addParameters({ jsx: { skip: 1 } })
  .add('Grid', () => (
    <Grid gap={16}>
      <Cell>
        <StyledBox>1</StyledBox>
      </Cell>

      <Cell>
        <Grid gap={16} direction="row">
          <Cell>
            <StyledBox>1/2</StyledBox>
          </Cell>

          <Cell>
            <StyledBox>1/2</StyledBox>
          </Cell>
        </Grid>
      </Cell>

      <Cell>
        <Grid gap={16} direction="row">
          <Cell>
            <StyledBox>1/3</StyledBox>
          </Cell>

          <Cell xs={4}>
            <StyledBox>1/3</StyledBox>
          </Cell>

          <Cell offset={{ xs: { before: 1 } }}>
            <StyledBox>1/3</StyledBox>
          </Cell>
        </Grid>
      </Cell>
    </Grid>
  ));
