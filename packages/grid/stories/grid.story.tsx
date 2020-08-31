import React from 'react';
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

export const Basic: Story = () => {
  return (
    <Grid>
      <Cell>
        <Box>One of three columns</Box>
      </Cell>

      <Cell>
        <Box>One of three columns</Box>
      </Cell>

      <Cell>
        <Box>One of three columns</Box>
      </Cell>
    </Grid>
  );
};

export const MultipleRows: Story = () => {
  return (
    <Grid direction="column" gap="1rem">
      <Cell>
        <Grid>
          <Cell>
            <Box>One of two columns</Box>
          </Cell>

          <Cell>
            <Box>One of two columns</Box>
          </Cell>
        </Grid>
      </Cell>

      <Cell>
        <Grid>
          <Cell>
            <Box>One of three columns</Box>
          </Cell>

          <Cell>
            <Box>One of three columns</Box>
          </Cell>

          <Cell>
            <Box>One of three columns</Box>
          </Cell>
        </Grid>
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
        <Grid gap="2rem">
          <Cell>
            <Box>One of three columns</Box>
          </Cell>

          <Cell>
            <Box>One of three columns</Box>
          </Cell>

          <Cell>
            <Box>One of three columns</Box>
          </Cell>
        </Grid>
      </Cell>

      <Cell>
        <Grid gap="2rem">
          <Cell>
            <Box>One of two columns</Box>
          </Cell>

          <Cell>
            <Box>One of two columns</Box>
          </Cell>
        </Grid>
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
            <Box>One of two columns</Box>
          </Cell>

          <Cell offset={[2]}>
            <Box>One of two columns</Box>
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

          <Grid>
            <Cell>
              <Box>One of two columns</Box>
            </Cell>

            <Cell>
              <Box>One of two columns</Box>
            </Cell>
          </Grid>
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

          <Grid>
            <Cell>
              <Box>One of two columns</Box>
            </Cell>

            <Cell>
              <Box>One of two columns</Box>
            </Cell>
          </Grid>
        </Box>
      </Cell>
    </Grid>
  );
};
