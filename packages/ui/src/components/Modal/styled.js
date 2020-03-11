import Flex from '../Flex';
import styled, { css } from 'styled-components';
import { Mixin } from '../../theme';

const Modal = styled(Flex).withConfig({ displayName: 'Modal' })(
  ({ isOpen }) => css`
    min-width: 20%;

    border: 1px solid var(--c-light);
    background-color: var(--c-lightest);

    position: fixed;
    top: 50%;
    left: 50%;
    z-index: ${isOpen ? 'var(--l-topmost)' : -1};

    transform: translateY(-50%) translateX(-50%);

    opacity: ${isOpen ? 1 : 0};

    & + ${Overlay} {
      opacity: ${isOpen ? 0.25 : 0};
      z-index: ${isOpen ? 'calc(var(--l-topmost) - 1)' : -1};
    }
  `
);

const Icon = styled.button.withConfig({ displayName: 'Icon' })`
  display: flex;
  align-items: center;

  height: 36px;

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
`;

const Overlay = styled.button.withConfig({ displayName: 'Overlay' })`
  position: fixed;
  top: 0;
  left: 0;
  z-index: calc(var(--l-topmost) - 1);

  width: 100vw;
  height: 100vh;

  background-color: var(--c-lightest);
  cursor: default;
`;

const Header = styled(Flex)`
  padding: calc(1rem - (0.375rem / 2)) var(--i-regular);
`;

const Content = styled(Flex)`
  padding: var(--i-regular);
`;
export const Styled = { Modal, Header, Content, Icon, Overlay };
