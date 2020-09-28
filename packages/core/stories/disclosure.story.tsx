import React from 'react';
import type { Story } from '@storybook/react';
import styled, { css } from 'styled-components';

import Chevron from '@brix-ui/icons/chevron';

import Flex from '../src/flex';
import Text from '../src/text';
import Disclosure, { DisclosureProps } from '../src/disclosure';

export default {
  title: 'Widgets/Disclosure',
  component: Disclosure,

  argTypes: {
    isOpen: {
      control: 'boolean',
    },
    icon: {},
    summary: {
      control: 'text',
      description: 'Content to be displayed inside the button',
    },
    isDisabled: {
      control: 'boolean',
    },
    onOpen: {},
    onChange: {},
    onClose: {},
  },
  args: {
    summary: 'Disclosure summary',
    isDisabled: false,
  },
};

export const Basic: Story<DisclosureProps> = ({ summary, ...args }) => {
  return (
    <Disclosure {...args} summary={<Text lineHeightCompensation>{summary}</Text>}>
      Disclosed!
    </Disclosure>
  );
};

const Container = styled(Flex)`
  border-color: var(--c-accent-weak);
`;

const Icon = styled(Chevron)``;

const Summary = styled.button<{
  isOpen: boolean;
}>(
  ({ isOpen }) => css`
    &,
    ${Icon} {
      color: var(--c-text-base-weak);
    }

    ${isOpen
      ? css`
          background-color: var(--c-accent-strong-down);
        `
      : css`
          background-color: var(--c-accent-strong);
        `};

    &:focus {
      background-color: var(--c-accent-strong-down);
    }
  `
);

export const Stylable: Story<DisclosureProps> = ({ summary, ...args }) => {
  return (
    <Disclosure
      {...args}
      summary={<Text lineHeightCompensation>{summary}</Text>}
      styles={{
        Container,
        Summary,
        Icon,
      }}
    >
      Styled & Disclosed!
    </Disclosure>
  );
};
