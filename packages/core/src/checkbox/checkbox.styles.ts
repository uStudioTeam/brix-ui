import styled, { css } from 'styled-components';

import { applyDisplayNames, createCustomProperties } from '@brix-ui/utils/functions';
import { hidden, shadow, size } from '@brix-ui/theme/mixin';
import Check from '@brix-ui/icons/check';

import type { CheckboxProps } from './checkbox.props';

const CheckIcon = styled(Check)`
  ${size('var(--icon-size)')};

  transform: translateY(2.5%);
`;

const Input = styled.input`
  ${hidden};
`;

// Did not specify ReturnType due to `styled-components` typing inconsistency
const checkedShapeColor = (color: string) => {
  return css`
    background-color: var(--${color});
    border-color: var(--${color});
  `;
};

const Checkbox = styled.label<Pick<CheckboxProps, 'customProperties'>>(
  ({ customProperties }) => css`
    ${createCustomProperties(customProperties, {
      iconSize: '14px',
    })};

    position: relative;

    ${size('var(--input-height-large)')};

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &:before {
      content: '';

      position: absolute;
      top: 50%;
      left: 50%;

      ${size('var(--input-height-small)')};

      border-width: 1px;
      border-style: solid;
      border-radius: var(--input-border-radius);

      transform: translate(-50%, -50%);

      transition: all var(--transition-short);
    }

    &[aria-disabled] {
      cursor: not-allowed;
    }

    &:not([aria-disabled]) {
      &:active {
        transform: scale(0.95);
      }
    }

    &[aria-checked='true'] {
      color: var(--c-text-base-weak);

      &:before {
        ${checkedShapeColor(`input-background-color-checked`)};
      }

      &:hover {
        &:before {
          box-shadow: ${shadow(`accent-strong`, 0.25)};
        }
      }

      &:focus-within {
        &:before {
          ${checkedShapeColor(`input-background-color-checked-focus`)};
        }
      }

      &[aria-invalid] {
        &:before {
          ${checkedShapeColor(`input-border-color-invalid`)};
        }

        &:hover {
          &:before {
            box-shadow: ${shadow(`accent-strong`, 0.25)};
          }
        }

        &:focus-within {
          &:before {
            ${checkedShapeColor(`input-border-color-invalid-focus`)};
          }
        }
      }

      &[aria-disabled] {
        &:hover {
          &:before {
            box-shadow: none;
          }
        }

        &,
        &:active {
          &:before {
            ${checkedShapeColor('input-placeholder-color-disabled')}
          }
        }
      }
    }

    &[aria-checked='false'] {
      color: var(--input-background-color);

      &:before {
        background-color: var(--input-background-color);
        border-color: var(--input-border-color);
      }

      &:hover {
        &:before {
          box-shadow: ${shadow('base-strong', 0.15)};
        }
      }

      &:focus-within,
      &:active {
        &:before {
          border-color: var(--input-border-color-focus);
        }
      }

      &:active {
        color: var(--input-background-color-checked-focus);
      }

      &[aria-invalid] {
        &:before {
          border-color: var(--input-border-color-invalid);
        }

        &:focus-within,
        &:active {
          &:before {
            border-color: var(--input-border-color-invalid-focus);
          }
        }

        &:active {
          color: var(--input-border-color-invalid-focus);
        }
      }

      &[aria-disabled] {
        &:before {
          background-color: var(--input-background-color-disabled);
        }

        &:hover {
          &:before {
            box-shadow: none;
          }
        }

        &,
        &:active {
          color: var(--input-background-color-disabled);

          &:before {
            border-color: var(--input-border-color-disabled);
          }
        }
      }
    }
  `
);

const Styled = applyDisplayNames({ CheckIcon, Input, Checkbox });

export default Styled;
