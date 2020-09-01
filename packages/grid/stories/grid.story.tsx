import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';

import Flex from '@ustudio-ui/core/flex';
import Text from '@ustudio-ui/core/text';
import { Grid, Cell } from '@ustudio-ui/grid';

export default {
  title: 'Data/Grid',
};

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

export const Basic: Story = () => {
  return <Grid>{mapCells(3)}</Grid>;
};

export const MultipleRows: Story = () => {
  return (
    <Grid direction="column" gap="1rem">
      <Cell>
        <Grid>{mapCells(2)}</Grid>
      </Cell>

      <Cell>
        <Grid>{mapCells(3)}</Grid>
      </Cell>
    </Grid>
  );
};

export const SettingColumnWidth: Story = () => {
  return (
    <Grid>
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

export const Gaps: Story = () => {
  return (
    <Grid direction="column" gap="1rem">
      <Cell>
        <Grid gap="2rem">{mapCells(3)}</Grid>
      </Cell>

      <Cell>
        <Grid gap="2rem">{mapCells(2)}</Grid>
      </Cell>
    </Grid>
  );
};

export const Offsets: Story = () => {
  return (
    <Grid direction="column" gap="1rem">
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

export const Nesting: Story = () => {
  return (
    <Grid direction="column" gap="1rem">
      <Cell>
        <Box
          direction="column"
          gap={{
            vertical: '1rem',
          }}
        >
          <Text variant="h3">One of two rows</Text>

          <Grid>{mapCells(2)}</Grid>
        </Box>
      </Cell>

      <Cell>
        <Box
          direction="column"
          gap={{
            vertical: '1rem',
          }}
        >
          <Text variant="h3">One of two rows</Text>

          <Grid>{mapCells(2)}</Grid>
        </Box>
      </Cell>
    </Grid>
  );
};
