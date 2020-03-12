import React from 'react';

import { Grid, Cell, Flex } from '@ustudio/ui';
import styled from 'styled-components';

import { ComponentInfo, ComponentInfoItem, PropsTable } from '../../components';

const Styled = {
  Flex: styled(Flex)`
    background-color: var(--c-light);
    padding: 1rem;
    width: 100%;
    justify-content: center;
  `,
};

Styled.Flex.displayName = 'Flex';

const GridPage = () => {
  return (
    <ComponentInfo
      name="Grid"
      componentName="Grid"
      description={`
Primary focus of our grid system are customizable columns. You can control
for how many parts each column is divided, add before/after offsets (constrained by its size)
and move each column inside the grid.

Position of each Cell consists of three main properties: offset before, size (\`xs, md, lg, xl\`),
offset after. They determine start and end positions relatively to created grid tracks in a column layout.

Rows, on the other hand, are built automatically and require no adjustment.

Each size and offset value corresponds to the media breakpoints defined in \`ThemeProvider\`,
their values correspond to the fraction of column's division.

Grid's template is built using \`fr\` units.

Make sure to not wrap \`Cell\` into other components as it will break the layout.`}
      props={{
        children: {
          type: '`ReactNode[] | ReactNode`',
          required: true,
        },
        direction: { type: `\`'row' | 'column'\``, defaultValue: `\`'column'\`` },
        gap: { type: '`number`', defaultValue: '`0`' },
        divideBy: {
          type: '`number`',
          defaultValue: '`1`',
          description: 'Controls division rate of each Cell in a row',
          tooltip: `Works only if 'direction' is set to 'row'`,
        },
        alignment: {
          type: `\`
{
  [horizontal | vertical]?:
    'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'space-around';
}\``,
          description: 'Aligns all Cells inside the Grid',
          tooltip: 'Acts similarly to that of Flex',
        },
      }}
    >
      <ComponentInfoItem>
        <Grid gap={16}>
          <Cell>
            <Styled.Flex>Rabbit 1</Styled.Flex>
          </Cell>

          <Cell>
            <Grid direction="row" gap={16}>
              <Cell>
                <Styled.Flex>Rabbit 2</Styled.Flex>
              </Cell>
              <Cell>
                <Styled.Flex>Rabbit 3</Styled.Flex>
              </Cell>
            </Grid>
          </Cell>
          <Cell>
            <Grid direction="row" gap={16} divideBy={3}>
              <Cell xs={2}>
                <Styled.Flex>Rabbit 4</Styled.Flex>
              </Cell>
              <Cell offset={{ xs: { before: -1 } }} xs={4}>
                <Styled.Flex>Rabbit 5 ate a bit of Rabbit 4</Styled.Flex>
              </Cell>
              <Cell xs={5}>
                <Styled.Flex>Rabbit 6</Styled.Flex>
              </Cell>
              <Cell xs={1} offset={{ xs: { before: 3 } }}>
                <Styled.Flex>x_x</Styled.Flex>
              </Cell>
            </Grid>
          </Cell>
        </Grid>
      </ComponentInfoItem>

      <PropsTable
        componentName="Cell"
        props={{
          children: {
            type: '`ReactNode[] | ReactNode`',
            required: true,
          },
          direction: { type: `\`'row' | 'column'\``, defaultValue: `\`'row'\`` },
          isReversed: { type: '`boolean`', defaultValue: '`false`' },
          offset: {
            type: `\`
{
  [xs | md | lg | xl]?:
    {
      before?: number;
      after?: number
    };
}\``,
          },
          xs: { type: '`number`' },
          md: { type: '`number`' },
          lg: { type: '`number`' },
          xl: { type: '`number`' },
          alignment: {
            type: `\`
{
  [horizontal | vertical]?:
    'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'space-around';
}\``,
            description: 'Aligns content inside the Cell',
            tooltip: 'Acts similarly to that of Flex',
          },
        }}
      />
    </ComponentInfo>
  );
};

export default GridPage;
