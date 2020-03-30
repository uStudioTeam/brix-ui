import { css } from 'styled-components';
import { Mixin } from '../../../theme';

const _containedBorder = ({ disabled, isLoading }) =>
  disabled || isLoading
    ? css`
        border-color: var(--c-light);
      `
    : '';

const _containedBackground = ({ disabled, isLoading, intent }) => {
  return css`
    background: ${disabled || isLoading ? 'var(--c-light)' : `var(--g-${intent}) no-repeat, var(--c-${intent}-light)`};
  `;
};

const _outlinedBorder = ({ disabled, isLoading }) =>
  disabled || isLoading
    ? css`
        border-color: var(--c-neutral);
      `
    : '';

const _outlinedMobileActiveBorder = ({ disabled, isLoading }) => {
  return disabled || isLoading
    ? css`
        border-color: var(--c-neutral);
      `
    : '';
};

const _outlinedDesktopHoverBorder = ({ disabled, isLoading }) => {
  return disabled || isLoading ? 'border-color: var(--c-neutral)' : `border-color: rgba(255, 255, 255, 0)`;
};

const _outlinedDesktopHoverColor = ({ disabled, isLoading, intent }) => {
  const getColor = () => {
    if (disabled) return 'var(--c-neutral)';
    if (isLoading) return 'transparent';

    return `var(--c-${intent}-light)}`;
  };

  return css`
    color: ${getColor()};
  `;
};

const _outlinedDesktopActiveFocusColor = ({ isLoading, intent }) => {
  return css`
    color: ${isLoading ? 'transparent' : `var(--c-${intent}-light)`};
  `;
};

const _outlinedDesktopActiveFocusBorderColor = ({ isLoading, intent }) => {
  return css`
    border-color: ${isLoading ? 'var(--c-neutral)' : `var(--c-${intent}-light)`};
  `;
};
const getAppearance = ({ isDisabled: disabled, isLoading, intent, appearance = 'contained' }) => {
  return {
    text: css`
      ${Mixin.Style.inputPadding()};
      color: ${`var(--c-${intent})`};

      &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: var(--border-radius);
        background: ${`var(--g-${intent}), var(--c-${intent}-light)`};
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

      ${_containedBorder({ disabled, isLoading })};
      ${_containedBackground({ disabled, isLoading, intent })};

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
      ${Mixin.Style.borderAll({ color: `var(--c-${intent})` })};

      ${_outlinedBorder({ disabled, isLoading })};

      background-color: rgba(255, 255, 255, 0);
      color: ${`var(--c-${intent})`};

      ${Mixin.Device.mobile(css`
        &:active {
          color: ${`var(--c-${intent}-light)`};

          ${_outlinedMobileActiveBorder({ disabled, isLoading })};

          &:focus {
            box-shadow: ${`var(--s-${intent})`};
          }
        }
      `)};

      ${Mixin.Device.desktop(css`
        &:hover {
          box-shadow: ${`var(--s-${intent})`};
          ${_outlinedDesktopHoverBorder({ disabled, isLoading })};
          ${_outlinedDesktopHoverColor({ disabled, isLoading, intent })};
        }

        &:focus,
        &:active {
          ${_outlinedDesktopActiveFocusBorderColor({ isLoading, intent })}
          ${_outlinedDesktopActiveFocusColor({ isLoading, intent })};
        }
        &:focus {
          box-shadow: ${`var(--s-${intent})`};
        }

        &:active {
          box-shadow: none;
        }
      `)};
    `,
  }[appearance];
};

const loadingStyles = isLoading => {
  if (isLoading) {
    return css`
      color: rgba(255, 255, 255, 0);
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
        color: rgba(255, 255, 255, 0);
      }
    `;
  }
};

export const inject = { getAppearance, loadingStyles };
