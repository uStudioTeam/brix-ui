import { sc } from '../../../utils';
import IconComponent from '../../internal/Icon';
import { css } from 'styled-components';
import { Mixin } from '../../../theme';
import Text from '../../Text';
import { inject } from './alert.inject';

const Alert = sc('button')(
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
        ${Mixin.Style.borderWithBottom({ colorAll: 'rgba(255, 255, 255, 0)', colorBottom: `var(--c-${intent})` })};

        box-shadow: ${`var(--s-${intent})`};
        color: var(--c-lightest);
        background: ${`var(--g-${intent})`};

        transition-delay: 150ms, 150ms, 150ms, 0ms;
        transition-property: background, ${verticalPosition}, ${horizontalPosition}, color;
      }
    `)}

    ${Mixin.Device.desktop(css`
      &:hover {
        ${Mixin.Style.borderWithBottom({ colorAll: 'rgba(255, 255, 255, 0)', colorBottom: `var(--c-${intent})` })};

        box-shadow: ${`var(--s-${intent})`};
      }

      &:focus {
        ${Mixin.Style.borderWithBottom({ colorAll: 'rgba(255, 255, 255, 0)', colorBottom: `var(--c-${intent})` })};

        box-shadow: none;
        color: var(--c-lightest);
        background: ${`var(--g-${intent})`};

        transition-delay: 150ms, 150ms, 150ms, 0ms;
        transition-property: background, ${verticalPosition}, ${horizontalPosition}, color;
      }
    `)}
  `
)('Alert');

const Icon = sc(IconComponent)(
  ({ intent }) => css`
    margin-left: var(--i-regular);
    margin-bottom: -2px;

    color: ${`var(--c-${intent})`};

    ${Alert}:focus & {
      transition-delay: 150ms;
      color: var(--c-lightest);
    }
  `
)('Icon');

const Content = sc(Text)(``)('Content');

export const Styled = {
  Alert,
  Icon,
  Content,
};
