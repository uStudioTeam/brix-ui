import React from 'react';
import type { Meta, Story } from '@storybook/react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { transparentize } from 'polished';

import _Modal from '@brix-ui/contexts/modal';

import _Drawer, { DrawerProps } from '../src/drawer';
import Flex from '../src/flex';
import Text from '../src/text';
import _Overlay from '../src/overlay';

export const Drawer = _Drawer;
export const Overlay = _Overlay;
export const Modal = _Modal;

export default ({
  title: 'Widgets/Drawer',
  component: Drawer,
  subcomponents: { Overlay, Modal },
  excludeStories: ['Drawer', 'Overlay', 'Modal'],

  args: {
    isOpen: false,
    position: 'left',
  },
} as unknown) as Meta;

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

        <Copy>
          Here, take a cookie{' '}
          <span role="img" aria-label="smile">
            🙂
          </span>
        </Copy>
      </Flex>
    </Drawer>
  );
};

const Styled = {
  Overlay: styled(Overlay)(() => {
    return css`
      --opacity: 0.7;

      background-color: var(--c-base-strong);

      backdrop-filter: blur(5px);
    `;
  }),
};

const Body = createGlobalStyle`
  body {
    background-image: url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-ms-fields-cookies-024-1544735513.jpg");
    background-size: 100%;
  }
`;

export const WithOverlay: Story<DrawerProps> = ({ position, ...args }) => {
  return (
    <>
      <Modal {...args}>
        <Basic position={position} />

        <Styled.Overlay />
      </Modal>

      <Body />
    </>
  );
};
