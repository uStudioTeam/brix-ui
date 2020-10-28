import React from 'react';
import type { Meta, Story } from '@storybook/react';
import styled from 'styled-components';

import { Align, Direction } from '@brix-ui/types/css';

import _Divider, { DividerProps } from '../src/divider';
import { H3 } from '../src/text';

export const Divider = _Divider;

export default {
  title: 'General/Divider',
  component: Divider,
  excludeStories: ['Divider'],

  args: {
    direction: Direction.Row,
    thickness: '1px',
    align: Align.Start,
    padding: '1rem',
    margin: '1rem',
    redLine: '1rem',
  },
} as Meta;

const Container = styled.div`
  width: 100%;
  height: 5rem;
`;

export const Basic: Story<DividerProps> = (args) => {
  return (
    <Container>
      <Divider {...args} />
    </Container>
  );
};

export const WithChildren: Story<DividerProps> = (args) => {
  return (
    <Basic {...args}>
      <H3>Heading</H3>
    </Basic>
  );
};
