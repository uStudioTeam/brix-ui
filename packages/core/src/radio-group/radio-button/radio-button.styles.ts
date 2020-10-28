import styled, { css } from 'styled-components';

import { applyDisplayNames } from '@brix-ui/utils/functions';
import { hidden, shadow, size } from '@brix-ui/theme/mixin';

const Input = styled.input`
  ${hidden};
`;

const scale = (factor: number) => css`
  transform: translate(-50%, -50%) scale(${factor});
`;

const checkedValidity = (state: 'valid' | 'invalid') => css`
  &:before {
    border-color: var(--input-border-color-${state});
    background-color: var(--input-border-color-${state});
  }

  &:hover {
    &:before {
      box-shadow: ${shadow(`${state === 'valid' ? 'success' : 'critical'}-strong`, 0.25)};
    }
  }

  &:focus-within,
  &:active {
    &:before {
      border-color: var(--input-border-color-${state}-focus);
      background-color: var(--input-border-color-${state}-focus);
    }
  }
`;

const uncheckedValidity = (state: 'valid' | 'invalid') => css`
  &:before {
    border-color: var(--input-border-color-${state});
  }

  &:after {
    background-color: var(--input-border-color-${state}-focus);
  }

  &:focus-within,
  &:active {
    &:before {
      border-color: var(--input-border-color-${state}-focus);
    }
  }
`;

const RadioButton = styled.label(
  () => css`
    position: relative;

    ${size('var(--input-height-large)')};

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
      border-radius: calc(var(--input-height-small) / 2);
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
      ${size('var(--input-height-small)')};

      border-width: 1px;
      border-style: solid;

      transform: translate(-50%, -50%);
    }

    &:after {
      ${size('calc(var(--input-height-small) / 2)')};
    }

    &[aria-checked='true'] {
      &:before {
        border-color: var(--input-background-color-checked);
        background-color: var(--input-background-color-checked);
      }

      &:hover {
        &:before {
          box-shadow: ${shadow(`accent-strong`, 0.25)};
        }
      }

      &:focus-within,
      &:active {
        &:before {
          border-color: var(--input-background-color-checked-focus);
          background-color: var(--input-background-color-checked-focus);
        }
      }

      &:after {
        background-color: var(--c-text-base-weak);

        ${scale(1)};
      }

      &[aria-invalid='true'] {
        ${checkedValidity('invalid')};
      }

      &[aria-invalid='false'] {
        ${checkedValidity('valid')};
      }

      &[aria-disabled] {
        &:before {
          border-color: var(--input-border-color-disabled);

          background-color: var(--input-background-color-checked-disabled);
        }

        &:focus-within,
        &:active {
          &:before {
            border-color: var(--input-border-color-disabled);

            background-color: var(--input-border-color-disabled);
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
        border-color: var(--input-border-color);
      }

      &:before,
      &:after {
        background-color: var(--input-background-color);
      }

      &:hover {
        &:before {
          box-shadow: ${shadow('base-strong', 0.15)};
        }
      }

      &:focus-within,
      &:active {
        &:before {
          border-color: var(--input-background-color-checked);
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

      &[aria-invalid='true'] {
        ${uncheckedValidity('invalid')};
      }

      &[aria-invalid='false'] {
        ${uncheckedValidity('valid')};
      }

      &[aria-disabled] {
        &:after {
          ${scale(0)};
        }

        &,
        &:focus-within,
        &:active {
          &:before {
            border-color: var(--input-border-color-disabled);
            background-color: var(--input-background-color-disabled);
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
