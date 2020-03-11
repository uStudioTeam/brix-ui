import styled, { css } from 'styled-components';
import { Mixin } from '../../theme';

function reversePosition(position) {
  return {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[position];
}

function sidePositions(position) {
  switch (position) {
    case 'top':
    case 'bottom':
      return { left: 'left', right: 'right' };
    case 'left':
    case 'right':
    default:
      return { top: 'top', bottom: 'bottom' };
  }
}

function translateByPosition(position) {
  return {
    top: css`translate(-50%, calc(-100% - 0.25rem))`,
    right: css`translate(calc(100% + 0.25rem), -50%)`,
    bottom: css`translate(-50%, calc(100% + 0.25rem))`,
    left: css`translate(calc(-100% - 0.25rem), -50%)`,
  }[position];
}

function sideBordersByPosition(position) {
  return Object.keys(sidePositions(reversePosition(position))).reduce(
    (map, pos) => `
        ${map}
        border-${pos}: 0.5rem solid transparent;
      `,
    ''
  );
}

const Tooltip = styled.span.withConfig({ displayName: 'Tooltip' })(
  ({ position }) => css`
  position: absolute;
  // move sideways
  ${position === 'left' || position === 'right' ? `${position}: -0.25rem; top: 50%` : ''};
  // center horizontally
  ${position === 'top' || position === 'bottom' ? `${position}: -0.25rem; left: 50%;` : ''};

  display: block;
  width: max-content;
  padding: var(--i-small) var(--i-medium);
  opacity: 0;
  z-index: var(--l-bottom);

  background-color: var(--c-light);
  border-radius: var(--border-radius);
  box-shadow: var(--s-light);

  transform: ${translateByPosition(position)};
  transition: opacity var(--transition);
  transition-delay: 5ms;

  pointer-events: none;

  &:before {
    content: '';

    position: absolute;
    ${reversePosition(position)}: -0.5rem;
    // center by opposite axis
    ${Object.keys(sidePositions(position))[0]}: 50%;

    // triangle from borders
    border-${position}: var(--i-medium) solid var(--c-light);
    ${sideBordersByPosition(position)};

    // compensate centering
    transform: translate${position === 'left' || position === 'right' ? 'Y' : 'X'}(-50%);
  };
}`
);

const TooltipContainer = styled.span.withConfig({ displayName: 'TooltipContainer' })`
  position: relative;
  border-bottom: 1px dotted var(--c-dark);
  cursor: default;

  ${Mixin.Device.mobile(css`
    &:focus,
    &:focus-within {
      cursor: help;

      ${Tooltip} {
        pointer-events: auto;
        opacity: 1;
        user-select: none;
      }
    }
  `)}

  ${Mixin.Device.desktop(css`
    &:hover {
      cursor: help;

      ${Tooltip} {
        pointer-events: auto;
        opacity: 1;
        user-select: none;
      }
    }
  `)}
}`;

export const Styled = { TooltipContainer, Tooltip };
