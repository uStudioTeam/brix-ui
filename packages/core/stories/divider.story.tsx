import React from 'react';
import { Story } from '@storybook/react';
import styled from 'styled-components';

import { objectValues } from '@brix-ui/utils/functions';
import { Direction } from '@brix-ui/types/css';
import { TextAlign } from '@brix-ui/types/typography';

import Divider, { DividerProps } from '../src/divider';
import { H3 } from '../src/text';

export default {
  title: 'General/Divider',
  component: Divider,

  argTypes: {
    direction: {
      control: {
        type: 'inline-radio',
        options: objectValues(Direction),
      },
    },
    isInline: {
      control: 'boolean',
    },
    isReversed: {
      control: 'boolean',
    },
    color: {
      control: 'color',
    },
    thickness: {
      control: 'text',
    },
    align: {
      control: {
        type: 'inline-radio',
        options: objectValues(TextAlign),
      },
    },
    padding: {
      control: 'text',
    },
    margin: {
      control: 'text',
    },
    redLine: {
      control: 'text',
    },
  },

  args: {
    direction: Direction.Row,
    thickness: '1px',
    align: TextAlign.Left,
    padding: '1rem',
    margin: '1rem',
    redLine: '1rem',
  },
};

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
