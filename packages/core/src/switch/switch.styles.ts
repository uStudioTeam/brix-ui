import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { hidden, shadow, size } from '@brix-ui/theme/mixin';
import { applyDisplayNames, createCustomProperties } from '@brix-ui/utils/functions';
import { SwitchProps } from './switch.props';

const Input = styled.input`
  ${hidden};
`;

const start = css`calc(var(--horizontal-padding) + var(--border-width) + var(--thumb-indent))`;
const end = css`
  calc(50% + var(--thumb-indent) + var(--border-width));
`;

const Children = styled.span(
  () => css`
    position: absolute;
    top: 50%;

    ${size('12px')};

    display: flex;
    align-items: center;
    justify-content: center;

    transform: translate(0, -50%);

    user-select: none;

    transition: all var(--transition-short);
  `
);

const shapeColor = (color: string): FlattenSimpleInterpolation => {
  return css`
    background-color: var(--${color});
    border-color: var(--${color});
  `;
};

const checkedValidity = (state: 'valid' | 'invalid') => css`
  &:before {
    ${shapeColor(`input-border-color-${state}`)};
  }

  &:hover {
    &:before {
      box-shadow: ${shadow(`${state === 'valid' ? 'success' : 'critical'}-strong`, 0.25)};
    }
  }

  &:active,
  &:focus-within {
    &:before {
      ${shapeColor(`input-border-color-${state}-focus`)};
    }
  }
`;

const uncheckedValidity = (state: 'valid' | 'invalid') => css`
  ${Children} {
    color: var(--input-border-color-${state});
  }

  &:before {
    border-color: var(--input-border-color-${state});
  }

  &:after {
    background-color: var(--input-border-color-${state});
  }

  &:hover {
    &:before {
      box-shadow: ${shadow(`${state === 'valid' ? 'success' : 'critical'}-strong`, 0.25)};
    }
  }

  &:active,
  &:focus-within {
    &:before {
      border-color: var(--input-border-color-${state}-focus);
    }

    &:after {
      background-color: var(--input-border-color-${state}-focus);
    }
  }
`;

const Switch = styled.label<Pick<SwitchProps, 'customProperties'>>(({ customProperties }) => {
  return css`
    ${createCustomProperties(customProperties, {
      trackHeight: '16px',
      trackWidth: 'calc(var(--track-height) * 2)',
      thumbSize: '12px',
      thumbScale: '4px',
      thumbIndent: '1px',
      verticalPadding: 'calc(var(--track-height) / 2)',
      horizontalPadding: 'calc(var(--vertical-padding) * 0.75)',
      borderWidth: '1px',
    })};

    position: relative;

    height: calc(var(--track-height) + var(--vertical-padding) * 2);
    width: calc(var(--track-width) + var(--horizontal-padding) * 2);

    display: inline-block;

    cursor: pointer;

    &:before,
    &:after {
      content: '';

      position: absolute;

      transition: all var(--transition-short);
    }

    &:before {
      top: 50%;
      left: 50%;

      height: var(--track-height);
      width: var(--track-width);

      border-radius: calc(var(--track-height) / 2);
      border-width: var(--border-width);
      border-style: solid;

      transform: translate(-50%, -50%);
    }

    &:after {
      top: calc(var(--vertical-padding) + var(--border-width) + var(--thumb-indent));

      ${size('var(--thumb-size)')};

      border-radius: calc(var(--thumb-size) / 2);
    }

    &:active {
      transform: scale(0.975);

      &:after {
        width: calc(var(--thumb-size) + var(--thumb-scale));
      }
    }

    &[aria-disabled] {
      cursor: not-allowed;
    }

    &[aria-checked='true'] {
      ${Children} {
        left: ${start};
        color: var(--c-text-base-weak);
      }

      &:before {
        ${shapeColor('c-accent-strong')};
      }

      &:after {
        left: ${end};

        background-color: var(--c-text-base-weak);
      }

      &:hover {
        &:before {
          box-shadow: ${shadow('accent-strong', 0.25)};
        }
      }

      &:active {
        &:after {
          transform: translateX(-4px);
        }
      }

      &:active,
      &:focus-within {
        &:before {
          ${shapeColor('c-accent-strong-down')};
        }
      }

      &[aria-disabled] {
        ${Children} {
          color: var(--input-color-disabled);
        }

        &:before {
          ${shapeColor('input-border-color-disabled')};
        }

        &:after {
          background-color: var(--input-color-disabled);
        }

        &:hover {
          &:before {
            box-shadow: none;
          }
        }

        &:active {
          transform: scale(1);

          &:after {
            width: var(--thumb-size);

            transform: translateX(0);
          }
        }

        &:active,
        &:focus-within {
          &:before {
            ${shapeColor('input-border-color-disabled')};
          }
        }
      }

      &[aria-invalid='true'] {
        ${checkedValidity('invalid')};
      }

      &[aria-invalid='false'] {
        ${checkedValidity('valid')};
      }
    }

    &[aria-checked='false'] {
      ${Children} {
        left: ${end};

        color: var(--c-accent-strong);
      }

      &:before {
        background-color: var(--input-background-color);
        border-color: var(--input-border-color);
      }

      &:after {
        left: ${start};

        background-color: var(--input-border-color-focus);
      }

      &:hover {
        &:before {
          box-shadow: ${shadow('base-strong', 0.1)};
        }
      }

      &:active,
      &:focus-within {
        &:before {
          border-color: var(--c-accent-strong-down);
        }

        &:after {
          background-color: var(--c-accent-strong-down);
        }
      }

      &[aria-invalid='true'] {
        ${uncheckedValidity('invalid')};
      }

      &[aria-invalid='false'] {
        ${uncheckedValidity('valid')};
      }

      &[aria-disabled] {
        ${Children} {
          color: var(--input-color-disabled);
        }

        &:before,
        &:after {
          background-color: var(--input-background-color-disabled);
        }

        &:before {
          border-color: var(--input-border-color-disabled);
        }

        &:hover {
          &:before {
            box-shadow: none;
          }
        }

        &:active {
          transform: scale(1);

          &:after {
            width: var(--thumb-size);
          }
        }

        &,
        &:active,
        &:focus-within {
          &:before {
            border-color: var(--input-border-color-disabled);
          }

          &:after {
            background-color: var(--input-border-color-disabled);
          }
        }
      }
    }
  `;
});

const Styled = applyDisplayNames({ Switch, Input, Children });

export default Styled;
