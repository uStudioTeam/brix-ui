import { storiesOf } from '@storybook/react';
import { jsxDecorator } from 'storybook-addon-jsx/lib';

import React from 'react';
import styled from 'styled-components';

import Grid from '../Grid';
import Cell from '../Cell';

import Flex from '../../Flex';

const gridStory = storiesOf('Grid', module);

const Box = styled(Flex)`
  background-color: var(--c-light);

  box-shadow: 0 0 0 0.5px var(--c-dark);

  padding: var(--i-regular);
  width: 100%;

  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  padding: var(--i-large);
`;

const Alignable = styled(Grid)`
  min-height: 5rem;
  box-shadow: 0 0 0 0.5px var(--c-dark);
`;

gridStory
  .addDecorator(jsxDecorator)
  .addParameters({ jsx: { skip: 1 } })
  .add('Basic', () => {
    return (
      <Container>
        <Grid>
          <Cell>
            <Grid>
              <Cell>
                <Box>1/3</Box>
              </Cell>

              <Cell>
                <Box>1/3</Box>
              </Cell>

              <Cell>
                <Box>1/3</Box>
              </Cell>
            </Grid>
          </Cell>
        </Grid>
      </Container>
    );
  })
  .add('Auto layout', () => (
    <Container>
      <Grid isContainer xs={{ gap: 32, direction: 'column', maxWidth: 400 }}>
        <Cell>
          <Grid>
            <Cell>
              <Box>1/3</Box>
            </Cell>

            <Cell>
              <Box>1/3</Box>
            </Cell>

            <Cell>
              <Box>1/3</Box>
            </Cell>
          </Grid>
        </Cell>

        <Cell>
          <Grid>
            <Cell>
              <Box>1/2</Box>
            </Cell>

            <Cell>
              <Box>1/2</Box>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    </Container>
  ))
  .add('Setting one column width', () => (
    <Container>
      <Grid xs={{ gap: 32, direction: 'column' }}>
        <Cell>
          <Grid>
            <Cell>
              <Box>1/4</Box>
            </Cell>

            <Cell xs={{ size: 2 }}>
              <Box>2/4</Box>
            </Cell>

            <Cell>
              <Box>1/4</Box>
            </Cell>
          </Grid>
        </Cell>

        <Cell>
          <Grid>
            <Cell>
              <Box>1/5</Box>
            </Cell>

            <Cell xs={{ size: 3 }}>
              <Box>2/5</Box>
            </Cell>

            <Cell>
              <Box>1/5</Box>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    </Container>
  ))
  .add('Auto and set', () => (
    <Container>
      <Grid xs={{ gap: 32, direction: 'column' }}>
        <Cell>
          <Grid>
            <Cell>
              <Box>1/2</Box>
            </Cell>

            <Cell>
              <Box>1/2</Box>
            </Cell>
          </Grid>
        </Cell>

        <Cell>
          <Grid>
            <Cell>
              <Box>1/4</Box>
            </Cell>

            <Cell>
              <Box>1/4</Box>
            </Cell>

            <Cell xs={{ size: 2 }}>
              <Box>2/4</Box>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    </Container>
  ))
  .add('Triple mix', () => (
    <Container>
      <Grid xs={{ gap: 32, direction: 'column' }}>
        <Cell>
          <Grid>
            <Cell>
              <Box>1/2</Box>
            </Cell>

            <Cell>
              <Box>1/2</Box>
            </Cell>
          </Grid>
        </Cell>

        <Cell>
          <Grid>
            <Cell>
              <Box>1/3</Box>
            </Cell>

            <Cell>
              <Box>1/3</Box>
            </Cell>

            <Cell>
              <Box>1/3</Box>
            </Cell>
          </Grid>
        </Cell>

        <Cell>
          <Grid>
            <Cell xs={{ size: 2 }}>
              <Box>2/4</Box>
            </Cell>

            <Cell>
              <Box>1/4</Box>
            </Cell>

            <Cell>
              <Box>1/4</Box>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    </Container>
  ))
  .add('Gaps', () => (
    <Container>
      <Grid xs={{ gap: 32, direction: 'column' }}>
        <Cell>
          <Grid xs={{ gap: 32 }}>
            <Cell>
              <Box>1/2</Box>
            </Cell>

            <Cell>
              <Box>1/2</Box>
            </Cell>
          </Grid>
        </Cell>

        <Cell>
          <Grid xs={{ gap: 16 }}>
            <Cell>
              <Box>1/3</Box>
            </Cell>

            <Cell>
              <Box>1/3</Box>
            </Cell>

            <Cell>
              <Box>1/3</Box>
            </Cell>
          </Grid>
        </Cell>

        <Cell>
          <Grid xs={{ gap: 16 }}>
            <Cell xs={{ size: 2 }}>
              <Box>2/4</Box>
            </Cell>

            <Cell>
              <Box>1/4</Box>
            </Cell>

            <Cell>
              <Box>1/4</Box>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    </Container>
  ))
  .add('Offsets', () => (
    <Container>
      <Grid xs={{ gap: 32, direction: 'column' }}>
        <Cell>
          <Grid>
            <Cell xs={{ offset: { before: 1 } }}>
              <Box>1/3</Box>
            </Cell>

            <Cell>
              <Box>1/3</Box>
            </Cell>
          </Grid>
        </Cell>

        <Cell>
          <Grid>
            <Cell>
              <Box>1/4</Box>
            </Cell>

            <Cell>
              <Box>1/4</Box>
            </Cell>

            <Cell xs={{ offset: { after: 1 } }}>
              <Box>1/4</Box>
            </Cell>
          </Grid>
        </Cell>

        <Cell>
          <Grid>
            <Cell>
              <Box>1/5</Box>
            </Cell>

            <Cell xs={{ offset: { before: 1, after: 1 } }}>
              <Box>1/5</Box>
            </Cell>

            <Cell>
              <Box>1/5</Box>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    </Container>
  ))
  .add('Alignment', () => (
    <Container>
      <Grid xs={{ gap: 32, direction: 'column' }}>
        <Cell>
          <Alignable xs={{ alignment: { vertical: 'start' } }}>
            <Cell>
              <Box>1/2</Box>
            </Cell>

            <Cell>
              <Box>1/2</Box>
            </Cell>
          </Alignable>
        </Cell>

        <Cell>
          <Alignable xs={{ alignment: { vertical: 'center' } }}>
            <Cell>
              <Box>1/3</Box>
            </Cell>

            <Cell>
              <Box>1/3</Box>
            </Cell>

            <Cell>
              <Box>1/3</Box>
            </Cell>
          </Alignable>
        </Cell>

        <Cell>
          <Alignable xs={{ alignment: { vertical: 'end' } }}>
            <Cell>
              <Box>1/3</Box>
            </Cell>

            <Cell>
              <Box>1/3</Box>
            </Cell>

            <Cell>
              <Box>1/3</Box>
            </Cell>
          </Alignable>
        </Cell>
      </Grid>
    </Container>
  ))
  .add('Fibonacci', () => (
    <Container>
      <Grid>
        <Cell xs={{ size: 13 }}>
          <Box>13</Box>
        </Cell>

        <Cell xs={{ size: 8 }}>
          <Grid xs={{ direction: 'column' }}>
            <Cell xs={{ size: 8 }}>
              <Box>8</Box>
            </Cell>

            <Cell xs={{ size: 5 }}>
              <Grid>
                <Cell xs={{ size: 3 }}>
                  <Grid xs={{ direction: 'column' }}>
                    <Cell xs={{ size: 2 }}>
                      <Grid>
                        <Cell xs={{ size: 2 }}>
                          <Box>2</Box>
                        </Cell>

                        <Cell xs={{ size: 1 }}>
                          <Grid xs={{ direction: 'column' }}>
                            <Cell>
                              <Box>1</Box>
                            </Cell>

                            <Cell>
                              <Box>1</Box>
                            </Cell>
                          </Grid>
                        </Cell>
                      </Grid>
                    </Cell>

                    <Cell xs={{ size: 3 }}>
                      <Box>3</Box>
                    </Cell>
                  </Grid>
                </Cell>

                <Cell xs={{ size: 5 }}>
                  <Box>5</Box>
                </Cell>
              </Grid>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    </Container>
  ));
