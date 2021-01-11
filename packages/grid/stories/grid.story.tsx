import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import type { Meta, Story } from '@storybook/react';

import Flex from '@brix-ui/core/flex';
import Text from '@brix-ui/core/text';

import { Grid as _Grid, Cell as _Cell } from '../src';

export const Grid = _Grid;
export const Cell = _Cell;

export default ({
  title: 'General/Grid',
  component: Grid,
  subcomponents: { Cell },
  excludeStories: ['Grid', 'Cell'],
} as unknown) as Meta;

const Box = styled(Flex).attrs(() => ({
  padding: '1rem',
  align: 'center',
}))`
  color: var(--c-base-strong);
  background-color: var(--c-faint-weak);

  border: 1px solid var(--c-faint-strong-down);
`;

const mapCells = (count: number, content?: (index: number) => ReactNode): ReactElement[] => {
  return [...new Array(count).keys()].map((_, index) => {
    return (
      // eslint-disable-next-line react/no-array-index-key
      <Cell key={index}>
        <Box>{content ? content(index) : `One of ${count} columns`}</Box>
      </Cell>
    );
  });
};

export const Basic: Story = (args) => {
  return <Grid {...args}>{mapCells(3)}</Grid>;
};

export const MultipleRows: Story = (args) => {
  return (
    <Grid direction="column" gap="1rem" {...args}>
      <Cell>
        <Grid>{mapCells(2)}</Grid>
      </Cell>

      <Cell>
        <Grid>{mapCells(3)}</Grid>
      </Cell>
    </Grid>
  );
};

export const SettingColumnWidth: Story = (args) => {
  return (
    <Grid {...args}>
      <Cell>
        <Box>One of three columns</Box>
      </Cell>

      <Cell size={2}>
        <Box>One of three columns (wider)</Box>
      </Cell>

      <Cell>
        <Box>One of three columns</Box>
      </Cell>
    </Grid>
  );
};

export const Gaps: Story = (args) => {
  return (
    <Grid direction="column" gap="1rem" {...args}>
      <Cell>
        <Grid gap="2rem">{mapCells(3)}</Grid>
      </Cell>

      <Cell>
        <Grid gap="2rem">{mapCells(2)}</Grid>
      </Cell>
    </Grid>
  );
};

export const Offsets: Story = (args) => {
  return (
    <Grid direction="column" gap="1rem" {...args}>
      <Cell>
        <Grid gap="2rem">
          <Cell>
            <Box>One of three columns</Box>
          </Cell>

          <Cell offset={[1, 1]}>
            <Box>Keep distance ;)</Box>
          </Cell>

          <Cell>
            <Box>One of three columns</Box>
          </Cell>
        </Grid>
      </Cell>

      <Cell offset={[1]}>
        <Grid gap="2rem">
          <Cell>
            <Box>One of three columns</Box>
          </Cell>

          <Cell offset={[2]}>
            <Box>One of three columns</Box>
          </Cell>
        </Grid>
      </Cell>
    </Grid>
  );
};

export const Nesting: Story = (args) => {
  return (
    <Grid direction="column" gap="1rem" {...args}>
      <Cell>
        <Box direction="column" verticalGap="1rem">
          <Text variant="h3">One of two rows</Text>

          <Grid>{mapCells(2)}</Grid>
        </Box>
      </Cell>

      <Cell>
        <Box direction="column" verticalGap="1rem">
          <Text variant="h3">One of two rows</Text>

          <Grid>{mapCells(2)}</Grid>
        </Box>
      </Cell>
    </Grid>
  );
};

export const Container: Story = (args) => {
  return (
    <Grid {...args}>
      <Cell size={12} md={{ size: 10, offset: 2 }} lg={{ size: 8, offset: 2 }} xl={{ size: 6, offset: 3 }}>
        <Box direction="column" verticalGap="1rem">
          <Text variant="h3">Content</Text>
        </Box>
      </Cell>
    </Grid>
  );
};
