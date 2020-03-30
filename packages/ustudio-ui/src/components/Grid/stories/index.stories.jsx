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
  .add('Grid', () => {
    return (
      <Grid isContainer xs={{ gap: 16, direction: 'column' }}>
        <Cell>
          <StyledBox>1</StyledBox>
        </Cell>

        <Cell>
          <Grid xs={{ gap: 16 }}>
            <Cell>
              <StyledBox>1/2</StyledBox>
            </Cell>

            <Cell>
              <StyledBox>1/2</StyledBox>
            </Cell>
          </Grid>
        </Cell>

        <Cell>
          <Grid xs={{ gap: 16 }}>
            <Cell>
              <Flex>
                <StyledBox>1/3</StyledBox>
              </Flex>
            </Cell>

            <Cell>
              <StyledBox>1/3</StyledBox>
            </Cell>

            <Cell>
              <StyledBox>1/3</StyledBox>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    );
  });
