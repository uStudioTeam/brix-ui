import React from 'react';
import styled from 'styled-components';

import Flex from '@ustudio-ui/core/flex';

import { Grid, Cell } from '@ustudio-ui/grid';

export default {
  title: 'Data/Grid',
};

const Box = styled(Flex).attrs(() => ({
  padding: '2rem',
  align: 'center',
}))`
  color: var(--c-base-s);
  background-color: var(--c-faint-w);

  border: 1px solid var(--c-faint-w-u);
`;

export const Basic = () => {
  return (
    <Grid gap="1rem" sm={{ gap: '2rem' }}>
      <Cell>
        <Box>1</Box>
      </Cell>

      <Cell>
        <Box>2</Box>
      </Cell>

      <Cell>
        <Box>3</Box>
      </Cell>
    </Grid>
  );
};
