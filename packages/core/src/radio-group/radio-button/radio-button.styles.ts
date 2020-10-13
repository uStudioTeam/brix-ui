import styled, { css } from 'styled-components';

import { applyDisplayNames } from '@brix-ui/utils/functions';
import { hidden, shadow, size } from '@brix-ui/theme/mixin';

const Input = styled.input`
  ${hidden};
`;

const scale = (factor: number) => css`
  transform: translate(-50%, -50%) scale(${factor});
`;

const checkedValidity = (color: string) => css`
  &:before {
    border-color: var(--c-${color}-strong);
    background-color: var(--c-${color}-strong);
  }

  &:after {
    ${scale(1)};
  }

  &:hover {
    &:before {
      box-shadow: ${shadow(`${color}-strong`, 0.25)};
    }
  }

  &:focus-within {
    &:before {
      border-color: var(--c-${color}-weak-up);
      background-color: var(--c-${color}-weak-up);
    }
  }

  &:active {
    &:before {
      border-color: var(--c-${color}-weak-up);
      background-color: var(--c-${color}-weak-up);
    }
  }
`;

const RadioButton = styled.label(
  () => css`
    position: relative;

    ${size('28px')};

    display: block;

    transition: all var(--transition-short);

    cursor: pointer;

    &[aria-disabled] {
      cursor: not-allowed;
    }

    &:not([aria-disabled]) {
      &:active {
        transform: scale(0.925);
      }
    }

    &,
    &:before,
    &:after {
      border-radius: 8px;
    }

    &:before,
    &:after {
      content: '';

      position: absolute;
      top: 50%;
      left: 50%;

      transform-origin: center center;

      transition: var(--transition-short);
    }

    &:before {
      ${size('16px')};

      border-width: 1px;
      border-style: solid;

      transform: translate(-50%, -50%);
    }

    &:after {
      ${size('8px')};
    }

    &[aria-checked='true'] {
      ${checkedValidity('accent')};

      &:after {
        background-color: var(--c-text-base-weak);
      }

      &[aria-invalid] {
        ${checkedValidity('critical')};
      }

      &[aria-disabled] {
        &:before {
          border-color: var(--c-faint-weak-up);

          background-color: var(--c-faint-weak-up);
        }

        &:focus-within,
        &:active {
          &:before {
            border-color: var(--c-faint-weak-up);

            background-color: var(--c-faint-weak-up);
          }
        }

        &:hover {
          &:before {
            box-shadow: none;
          }
        }
      }
    }

    &[aria-checked='false'] {
      &:before {
        border-color: var(--c-faint-strong);
      }

      &:before,
      &:after {
        background-color: var(--c-base-weak);
      }

      &:hover {
        &:before {
          box-shadow: ${shadow('base-strong', 0.15)};
        }
      }

      &:focus-within,
      &:active {
        &:before {
          border-color: var(--c-accent-strong);
        }
      }

      &:after {
        ${scale(0)};
      }

      &:active {
        &:after {
          ${scale(1)};
        }
      }

      &[aria-invalid] {
        &:before {
          border-color: var(--c-critical-strong);
        }

        &:after {
          background-color: var(--c-critical-weak-up);
        }

        &:focus-within,
        &:active {
          &:before {
            border-color: var(--c-critical-weak-up);
          }
        }
      }

      &[aria-disabled] {
        &:after {
          ${scale(0)};
        }

        &,
        &:focus-within,
        &:active {
          &:before {
            border-color: var(--c-faint-weak-up);
            background-color: var(--c-faint-weak-down);
          }
        }

        &:active {
          &:after {
            ${scale(0)};
          }
        }

        &:hover {
          &:before {
            box-shadow: none;
          }
        }
      }
    }
  `
);

const Styled = applyDisplayNames({ RadioButton, Input });

export default Styled;
