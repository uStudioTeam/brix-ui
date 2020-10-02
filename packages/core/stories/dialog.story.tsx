import React from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react';

import Modal from '@brix-ui/contexts/modal';
import Button from '@brix-ui/core/button';
import Flex from '@brix-ui/core/flex';
import Overlay from '@brix-ui/core/overlay';
import Text from '@brix-ui/core/text';
import TextInput from '@brix-ui/core/text-input';

import Dialog, { DialogProps } from '../src/dialog';

export default {
  title: 'Widgets/Dialog',
  component: Dialog,

  argTypes: {
    isOpen: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
    titleAlign: {
      control: {
        type: 'inline-radio',
        options: ['left', 'center'],
      },
    },
  },

  args: {
    title: 'Confirm password reset',
    titleAlign: 'left',
  },
};

const Styled = {
  Overlay: styled(Overlay)`
    background-color: var(--c-text-base-strong);
  `,
  Strong: styled(Text).attrs(() => ({
    forwardedAs: 'strong',
  }))`
    font-weight: 700;
  `,
  Input: styled(TextInput)`
    width: 75%;

    align-self: center;
  `,
};

export const Basic: Story<DialogProps> = ({ title, titleAlign, ...args }) => {
  const dialogProps = { title, titleAlign };

  return (
    <Modal {...args} unmountOnExit>
      <Dialog {...dialogProps}>
        <Flex direction="column" gap={{ vertical: '0.75rem' }}>
          <Text as="label" htmlFor="confirm_password">
            Are you sure you want to <Styled.Strong>reset your password?</Styled.Strong>
          </Text>

          <Styled.Input id="confirm_password" type="password" isReadonly placeholder="Confirm password" />
        </Flex>

        <Flex as="footer" margin={{ top: '1.5rem' }} gap={{ horizontal: '1rem' }} horizontalAlign="end">
          <Button type="reset" appearance="faint">
            Cancel
          </Button>

          <Button type="submit" intent="critical">
            Reset
          </Button>
        </Flex>
      </Dialog>

      <Styled.Overlay />
    </Modal>
  );
};
