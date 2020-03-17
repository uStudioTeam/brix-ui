import { StyledComponents } from '../../../utils/styles/styled-component';
import IconComponent from '../../internal/Icon';
import styled, { css } from 'styled-components';
import { Mixin } from '../../../theme';
import { inject } from './inject';

const Alert = styled.button(
  ({ isOpen, intent, verticalPosition, horizontalPosition }) => css`
    ${Mixin.Style.borderWithBottom({ colorAll: 'var(--c-light)', colorBottom: `var(--c-${intent})` })};

    position: fixed;
    z-index: var(--l-topmost);
    ${inject.position({ isOpen, verticalPosition, horizontalPosition })};

    padding: var(--i-medium) var(--i-regular);

    display: flex;
    align-items: center;

    color: var(--c-darkest);
    background: var(--c-lightest);
    border-radius: var(--border-radius);
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
    margin-left: var(--i-regular);
    margin-bottom: -2px;

    color: ${`var(--c-${intent})`};

    ${Alert}:focus & {
      transition-delay: 150ms;
      color: var(--c-lightest);
    }
  `
);

export const Styled = StyledComponents({
  Alert,
  Icon,
});
