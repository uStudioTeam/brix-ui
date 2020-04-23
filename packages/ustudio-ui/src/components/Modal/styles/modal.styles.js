import { css } from 'styled-components';
import { sc } from '../../../utils';

import Flex from '../../Flex';
import { Mixin } from '../../../theme';
import Text from '../../Text';

import { inject } from './modal.inject';

const Modal = sc(Flex)(
  ({ isOpen }) => css`
    width: auto;
    min-width: 20%;
    max-width: calc(100vw - 4rem);

    max-height: calc(100vh - 4rem);

    border: 1px solid var(--c-light);
    background-color: var(--c-lightest);

    position: fixed;
    top: 50%;
    left: 50%;

    transform: translateY(-50%) translateX(-50%);

    ${inject.toggleStyles({ isOpen, Overlay })};
  `
)('Modal');

const Icon = sc('button')(css`
  display: flex;
  align-items: center;

  height: 36px;

  margin-left: auto;

  transform: rotate(0deg);
  transition: var(--transition);

  ${Mixin.Device.mobile(css`
    &:active {
      transform: rotate(-90deg);
      color: var(--c-primary);
    }
  `)}

  ${Mixin.Device.desktop(css`
    &:hover,
    &:focus {
      color: var(--c-primary);
    }

    &:hover {
      transform: rotate(-90deg);
    }

    &:focus {
      transform: rotate(0deg);
    }
  `)}
`)('Icon');

const Overlay = sc('button')(css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: calc(var(--l-topmost) - 1);

  width: 100vw;
  height: 100vh;

  background-color: var(--c-lightest);
  cursor: default;
`)('Overlay');

const Header = sc(Flex)(css`
  padding: calc(1rem - (0.375rem / 2)) var(--i-regular);

  border-bottom: 1px solid var(--c-light);
`)('Header');

const Title = sc(Text)(``)('Title');

const Content = sc(Flex)(css`
  padding: var(--i-regular);

  overflow-y: auto;
`)('Content');

const Footer = sc(Flex)(css`
  padding: calc(1rem - (0.375rem / 2)) var(--i-regular);

  border-top: 1px solid var(--c-light);
`)('Footer');

export const Styled = { Modal, Header, Content, Icon, Overlay, Title, Footer };
