import React from 'react';
import { Story } from '@storybook/react';
import styled, { css } from 'styled-components';

import Disclosure, { DisclosureProps } from '@ustudio-ui/core/disclosure';

import Flex from '@ustudio-ui/core/flex';
import Chevron from '../assets/icons/chevron.inline.svg';

export default {
  title: 'Widgets/Disclosure',
  component: Disclosure,

  argTypes: {
    summary: {
      control: 'text',
    },
    isDisabled: {
      control: 'boolean',
    },
  },
  args: {
    summary: 'Summary',
    isDisabled: false,
  },
};

export const Basic: Story<DisclosureProps> = (args) => {
  return <Disclosure {...args}>Disclosed!</Disclosure>;
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

export const Stylable: Story<DisclosureProps> = (args) => {
  return (
    <Disclosure
      {...args}
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
