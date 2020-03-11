import styled, { css } from 'styled-components';
import { Mixin } from '../../theme';

function getAppearance({ isDisabled: disabled, isLoading, intent, appearance = 'contained' }) {
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

      ${disabled || isLoading ? 'border-color: var(--c-light)' : ''};

      background: ${disabled || isLoading
        ? 'var(--c-light)'
        : `var(--g-${intent}) no-repeat, var(--c-${intent}-light)`};
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

      ${disabled || isLoading ? 'border-color: var(--c-neutral)' : ''};

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
          border-color: ${disabled || isLoading ? 'var(--c-neutral)' : ''};
          &:after {
            opacity: ${disabled || isLoading ? 0 : 0.1};
          }
        }
      `)}

      ${Mixin.Device.desktop(css`
        &:hover {
          border-color: ${disabled || isLoading ? 'var(--c-neutral)' : `var(--c-${intent}-light)`};
          color: ${disabled || isLoading ? 'var(--c-neutral)': `var(--c-${intent}-light`});
        }

        &:focus {
          border-color: var(--c-${intent}-light);
          color: var(--c-${intent}-light);
          box-shadow: var(--s-${intent});
        }

        &:active {
          color: var(--c-${intent}-light);
          border-color: ${disabled || isLoading ? 'var(--c-neutral)' : ''};
          &:after {
            opacity: ${disabled || isLoading ? 0 : 0.1};
          }
        }
      `)}
    `,
  }[appearance];
}

const Button = styled.button.withConfig({ displayName: 'Button' })(
  ({ intent, appearance, disabled, isLoading }) => css`
    position: relative;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 1 auto;

    ${getAppearance({ isDisabled: disabled, isLoading, intent, appearance })};
    border-radius: var(--border-radius);

    user-select: none;
    transition: var(--transition);

    ${Mixin.Font.bodyRegular()};

    &[disabled] {
      cursor: not-allowed;
      color: var(--c-neutral);

      ${Mixin.Device.desktop(css`
        &:hover {
          box-shadow: none;
        }
      `)}
    }

    ${isLoading
      ? css`
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
        `
      : ''};
  `
);

const LoadingSpinner = styled.span.withConfig({ displayName: 'LoadingSpinner' })`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
`;

export const Styled = { Button, LoadingSpinner };
