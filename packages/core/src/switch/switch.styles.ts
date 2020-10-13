import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { hidden, shadow, size } from '@brix-ui/theme/mixin';
import { applyDisplayNames } from '@brix-ui/utils/functions';

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
    background-color: var(--c-${color});
    border-color: var(--c-${color});
  `;
};

const Switch = styled.label(() => {
  return css`
    --track-height: 16px;
    --track-width: 32px;

    --thumb-size: 12px;
    --thumb-scale: 4px;

    --vertical-padding: calc(var(--track-height) / 2);
    --horizontal-padding: calc(var(--vertical-padding) * 0.75);

    --border-width: 1px;
    --thumb-indent: 1px;

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
        ${shapeColor('accent-strong')};
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
          ${shapeColor('accent-strong-down')};
        }
      }

      &[aria-disabled] {
        ${Children} {
          color: var(--c-faint-strong-down);
        }

        &:before {
          ${shapeColor('faint-weak-up')};
        }

        &:after {
          background-color: var(--c-faint-strong-down);
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
            ${shapeColor('faint-weak-up')};
          }
        }
      }

      &[aria-invalid] {
        &:before {
          ${shapeColor('critical-strong')};
        }

        &:hover {
          &:before {
            box-shadow: ${shadow('critical-strong', 0.25)};
          }
        }

        &:active,
        &:focus-within {
          &:before {
            ${shapeColor('critical-weak-up')};
          }
        }
      }
    }

    &[aria-checked='false'] {
      ${Children} {
        left: ${end};

        color: var(--c-accent-strong);
      }

      &:before {
        background-color: var(--c-base-weak);
        border-color: var(--c-faint-strong-down);
      }

      &:after {
        left: ${start};

        background-color: var(--c-accent-strong);
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

      &[aria-invalid] {
        ${Children} {
          color: var(--c-critical-strong);
        }

        &:before {
          border-color: var(--c-critical-strong);
        }

        &:after {
          background-color: var(--c-critical-strong);
        }

        &:hover {
          &:before {
            box-shadow: ${shadow('critical-strong', 0.25)};
          }
        }

        &:active,
        &:focus-within {
          &:before {
            border-color: var(--c-critical-weak-up);
          }

          &:after {
            background-color: var(--c-critical-weak-up);
          }
        }
      }

      &[aria-disabled] {
        ${Children} {
          color: var(--c-faint-strong-down);
        }

        &:before,
        &:after {
          background-color: var(--faint-weak);
        }

        &:before {
          border-color: var(--c-faint-weak-up);
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
            border-color: var(--c-faint-weak-up);
          }

          &:after {
            background-color: var(--c-faint-weak-up);
          }
        }
      }
    }
  `;
});

const Styled = applyDisplayNames({ Switch, Input, Children });

export default Styled;
