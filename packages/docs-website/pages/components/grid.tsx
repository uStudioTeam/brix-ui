import React from 'react';

import { Grid, Cell, Flex } from 'ustudio-ui';
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
Use it like you are used to - through breakpoints! \`Grid\` and \`Cell\` accept four breakpoints in their props,
each controlling its own state.

For \`Cell\` you may define its \`size\` and \`offset\`, which are automatically adjusted inside existing grid.
For \`Grid\` you are able to overwrite its \`template\`, set \`maxWidth\`, \`direction\`, \`gap\` and \`alignment\` of its Cells.

Each breakpoint value corresponds to the media breakpoints defined in \`ThemeProvider\`,
their values correspond to the fraction of cell's division.

Grid's template is built using \`fr\` units.

Make sure to not wrap \`Cell\` into other components as it will break the layout.`}
      props={{
        children: {
          type: '`Cell | Cell[]`',
          required: true,
        },
        isContainer: {
          type: '`boolean`',
          description: 'Could be used to add side margins in a top-level grid',
        },
        'xs | md | lg | xl': {
          type: `\`{
  template?: string;
  maxWidth?: number(in px);
  direction?: 'row' | 'column';
  gap?: number(in rem);
  alignment?: {
    [horizontal | vertical]?: 'start' | 'end' | 'center' | 'stretch' | 'space-between' | 'space-around';
  };
}\``,
        },
      }}
      classNames={['Grid']}
    >
      <ComponentInfoItem>
        <Grid xs={{ gap: 16, direction: 'column' }}>
          <Cell>
            <Styled.Flex>Rabbit 1</Styled.Flex>
          </Cell>

          <Cell>
            <Grid xs={{ gap: 16 }}>
              <Cell>
                <Styled.Flex>Rabbit 2</Styled.Flex>
              </Cell>
              <Cell>
                <Styled.Flex>Rabbit 3</Styled.Flex>
              </Cell>
            </Grid>
          </Cell>
          <Cell>
            <Grid xs={{ gap: 16 }}>
              <Cell>
                <Styled.Flex>Rabbit 4</Styled.Flex>
              </Cell>
              <Cell>
                <Styled.Flex>Rabbit 5 ate a bit of Rabbit 4</Styled.Flex>
              </Cell>
              <Cell>
                <Styled.Flex>Rabbit 6</Styled.Flex>
              </Cell>
              <Cell>
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
            type: '`ReactNode | ReactNode[]`',
            required: true,
          },
          'xs | md | lg | xl': {
            type: `\`{
  size?: number(in fr);
  offset?: {
    [before | after]?: number(in fr),
  };
}\``,
          },
        }}
        classNames={['Cell']}
      />
    </ComponentInfo>
  );
};

export default GridPage;
