import { transparentize } from 'polished';
import React from 'react';
import { Story } from '@storybook/react';

import { Position } from '@brix-ui/types/css';
import { objectValues } from '@brix-ui/utils/functions';
import styled from 'styled-components';

import Drawer, { DrawerProps } from '../src/drawer';
import Flex from '../src/flex';
import Text from '../src/text';

export default {
  title: 'Widgets/Drawer',
  component: Drawer,

  argTypes: {
    isOpen: {
      control: 'boolean',
    },
    position: {
      control: {
        type: 'inline-radio',
        options: objectValues(Position),
      },
    },
    unmountOnExit: {
      control: 'boolean',
    },
  },

  args: {
    isOpen: false,
    position: 'left',
  },
};

const Cookie = styled.img`
  width: 10rem;
  height: auto;
`;

const Copy = styled(Text)`
  padding: 4px 12px;

  background-color: var(--c-accent-weak-down);
  border-radius: 16px;
  box-shadow: 0 8px 32px 8px ${({ theme }) => transparentize(0.95, theme.palette['base-strong'])};

  transform: translateY(-200%);
`;

export const Basic: Story<DrawerProps> = (args) => {
  return (
    <Drawer {...args}>
      <Flex direction="column" padding={{ horizontal: '2rem' }} margin={{ bottom: '-30px' }} align="center">
        <Cookie src="https://i.imgur.com/rIcuh40.png" alt="Imagine a cookie here" />

        <Copy>Here, take a cookie :)</Copy>
      </Flex>
    </Drawer>
  );
};
