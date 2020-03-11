import IconComponent from '../internal/Icon';
import styled, { css } from 'styled-components';
import { Mixin } from '../../theme';

function isVerticalPositionValid(verticalPosition) {
  return verticalPosition === 'top' || verticalPosition === 'bottom';
}

function isHorizontalPositionValid(horizontalPosition) {
  return horizontalPosition === 'left' || horizontalPosition === 'center' || horizontalPosition === 'right';
}

function getPosition({ isOpen, verticalPosition, horizontalPosition }) {
  const vPos = isVerticalPositionValid(verticalPosition) ? verticalPosition : 'bottom';
  const hPos = isHorizontalPositionValid(horizontalPosition) ? horizontalPosition : 'right';

  return hPos !== 'center'
    ? css`
        ${vPos}: var(--i-regular);
        ${hPos}: ${isOpen ? 'var(--i-regular)' : '-50%'};
      `
    : css`
        ${vPos}: ${isOpen ? 'var(--i-regular)' : '-3rem'};
        left: 50%;
        transform: translateX(-50%);
      `;
}

const Alert = styled.button.withConfig({ displayName: 'Alert' })(
  ({ isOpen, intent, verticalPosition, horizontalPosition }) => css`
    position: fixed;
    z-index: var(--l-topmost);
    ${getPosition({ isOpen, verticalPosition, horizontalPosition })};

    padding: var(--i-medium) var(--i-regular);

    display: flex;
    align-items: center;
    color: var(--c-darkest);
    background: var(--c-lightest);
    border-radius: var(--border-radius);

    ${Mixin.Style.borderWithBottom({ colorAll: 'var(--c-light)', colorBottom: `var(--c-${intent})` })};
    box-shadow: var(--s-light);

    transition: var(--transition);

    ${Mixin.Device.mobile(css`
      &:active {
        ${Mixin.Style.borderWithBottom({ colorAll: 'transparent', colorBottom: `var(--c-${intent})` })};

        box-shadow: ${`var(--s-${intent})`};
        color: var(--c-lightest);
        background: ${`var(--g-${intent})`};

        transition-delay: 150ms, 150ms, 150ms, 0ms;
        transition-property: background, ${verticalPosition}, ${horizontalPosition}, color;
      }
    `)}

    ${Mixin.Device.desktop(css`
      &:hover {
        ${Mixin.Style.borderWithBottom({ colorAll: 'transparent', colorBottom: `var(--c-${intent})` })};

        box-shadow: ${`var(--s-${intent})`};
      }

      &:focus {
        ${Mixin.Style.borderWithBottom({ colorAll: 'transparent', colorBottom: `var(--c-${intent})` })};

        box-shadow: none;
        color: var(--c-lightest);
        background: ${`var(--g-${intent})`};

        transition-delay: 150ms, 150ms, 150ms, 0ms;
        transition-property: background, ${verticalPosition}, ${horizontalPosition}, color;
      }
    `)}
  `
);

const Icon = styled(IconComponent)(
  ({ intent }) => css`
    color: ${`var(--c-${intent})`};
    margin-left: var(--i-regular);
    margin-bottom: -2px;

    ${Alert}:focus & {
      transition-delay: 150ms;
      color: var(--c-lightest);
    }
  `
);

export const Styled = {
  Alert,
  Icon,
};
