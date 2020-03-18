import { css } from 'styled-components';
import { Mixin } from '../../../theme';

const getAppearance = ({ isDisabled: disabled, isLoading, intent, appearance = 'contained' }) => {
  return {
    text: css`
      ${Mixin.Style.inputPadding()};
      color: var(--c-${intent});

      &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: var(--border-radius);
        background: var(--g-${intent}), var(--c-${intent}-light);
        opacity: 0;
        pointer-events: none;
        transition: var(--transition);
      }

      ${Mixin.Device.mobile(css`
        &:active {
          &:after {
            opacity: ${disabled || isLoading ? 0 : 0.3};
          }
        }
      `)}

      ${Mixin.Device.desktop(css`
        &:hover {
          &:after {
            opacity: ${disabled || isLoading ? 0 : 0.1};
          }
        }

        &:focus {
          &:after {
            opacity: ${disabled || isLoading ? 0 : 0.2};
          }
        }

        &:active {
          &:after {
            opacity: ${disabled || isLoading ? 0 : 0.3};
          }
        }
      `)}
    `,
    contained: css`
      ${Mixin.Style.inputPadding()};

      ${containedBorder(disabled, isLoading)};
      ${containedBackground(disabled, isLoading, intent)};

      color: var(--c-lightest);

      ${Mixin.Device.mobile(css`
        &:active {
          background-position-y: -39px;
          box-shadow: ${`var(--s-${intent})`};
        }
      `)};

      ${Mixin.Device.desktop(css`
        &:hover {
          background-position-y: -39px;
        }

        &:focus {
          box-shadow: ${`var(--s-${intent})`};
        }

        &:active {
          background-position-y: 0;
        }
      `)};
    `,
    outlined: css`
      ${Mixin.Style.inputPadding()};
      ${Mixin.Style.borderAll({ color: `var(--c-${intent})` || '' })};

      ${outlinedBorder(disabled, isLoading)};

      background-color: transparent;
      color: var(--c-${intent});

      &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: var(--border-radius);
        background: var(--g-${intent}), var(--c-${intent}-light);
        opacity: 0;
        pointer-events: none;
        transition: var(--transition);
      }

      ${Mixin.Device.mobile(css`
        &:active {
          color: var(--c-${intent}-light);

          ${outlinedMobileActiveBorder(disabled, isLoading)}

          &:after {
            opacity: ${disabled || isLoading ? 0 : 0.1};
          }
        }
      `)}

      ${Mixin.Device.desktop(css`
        &:hover {
          ${outlinedDesktopHoverBorder(disabled, isLoading, intent)};
          ${outlinedDesktopHoverColor(disabled, isLoading)}
        }

        &:focus {
          border-color: var(--c-${intent}-light);
          color: var(--c-${intent}-light);
          box-shadow: var(--s-${intent});
        }

        &:active {
          color: var(--c-${intent}-light);
          border-color: outlinedDisabledOrLoadingBorder(disabled, isLoading);
          &:after {
            ${outlinedDesktopActiveOpacity(disabled, isLoading)};
          }
        }
      `)}
    `,
  }[appearance];
};

const containedBorder = (disabled, isLoading) => (disabled || isLoading ? 'border-color: var(--c-light)' : '');

const containedBackground = (disabled, isLoading, intent) =>
  `background: ${disabled || isLoading ? 'var(--c-light)' : `var(--g-${intent}) no-repeat, var(--c-${intent}-light)`}`;

const outlinedBorder = (disabled, isLoading) => (disabled || isLoading ? 'border-color: var(--c-neutral)' : '');

const outlinedMobileActiveBorder = (disabled, isLoading) =>
  disabled || isLoading ? 'border-color: var(--c-neutral)' : '';

const outlinedDesktopHoverBorder = (disabled, isLoading, intent) =>
  `border-color: ${disabled || isLoading ? 'var(--c-neutral)' : `var(--c-${intent}-light)`}`;

const outlinedDesktopHoverColor = (disabled, isLoading, intent) =>
  `color: ${disabled || isLoading ? 'var(--c-neutral)' : `var(--c-${intent}-light)`}`;

const outlinedDesktopActiveOpacity = (disabled, isLoading) => `opacity: ${disabled || isLoading ? 0 : 1}`;

const loadingStyles = isLoading => {
  if (isLoading) {
    return css`
      color: transparent;
      cursor: wait;

      &:hover {
        box-shadow: none;
      }

      &:active,
      &:focus {
        box-shadow: none;
        pointer-events: none;
      }

      &[disabled] {
        cursor: wait;
        color: transparent;
      }
    `;
  }
};

export const inject = { getAppearance, loadingStyles };
