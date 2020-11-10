import React from 'react';
import styled from 'styled-components';
import type { Meta, Story } from '@storybook/react';

import _Modal from '@brix-ui/contexts/modal';
import Button from '@brix-ui/core/button';
import Flex from '@brix-ui/core/flex';
import _Overlay from '@brix-ui/core/overlay';
import Text from '@brix-ui/core/text';
import TextInput from '@brix-ui/core/text-input';

import _Dialog, { DialogProps } from '../src/dialog';

export const Dialog = _Dialog;
export const Modal = _Modal;
export const Overlay = _Overlay;

export default {
  title: 'Widgets/Dialog',
  component: Dialog,
  subcomponents: { Modal, Overlay },
  excludeStories: ['Dialog', 'Modal', 'Overlay'],

  args: {
    title: 'Confirm password reset',
    titleAlign: 'left',
  },
} as Meta;

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
        <Flex direction="column" verticalGap="0.75rem">
          <Text as="label" htmlFor="confirm_password">
            Are you sure you want to <Styled.Strong>reset your password?</Styled.Strong>
          </Text>

          <Styled.Input id="confirm_password" type="password" isReadonly placeholder="Confirm password" />
        </Flex>

        <Flex as="footer" margin={{ top: '1.5rem' }} horizontalGap="1rem" horizontalAlign="end">
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
