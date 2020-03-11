import { css } from 'styled-components';
import { Device } from './device';

export const Style = {
  borderWithBottom: ({ colorAll, colorBottom }) => css`
    border-top: 1px solid ${colorAll};
    border-right: 1px solid ${colorAll};
    border-left: 1px solid ${colorAll};
    border-bottom: 1px solid ${colorBottom};
  `,
  borderAll: ({ color }) => css`
    border: 1px solid ${color};
  `,
  linkUnderline: () => css`
    position: relative;

    transition: var(--transition);

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: currentColor;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform var(--transition);
    }

    ${Device.mobile(css`
      &:active {
        &::after {
          transform: scaleX(1);
        }
      }
    `)}

    ${Device.desktop(css`
      &:hover,
      &:focus {
        &::after {
          transform: scaleX(1);
        }
      }

      &:active {
        &::after {
          transform-origin: right;
          transform: scaleX(0);
        }
      }
    `)}
  `,
  inputPadding: () => css`
    padding: calc(var(--i-medium) - (0.375rem / 2)) var(--i-medium);
  `,
};
