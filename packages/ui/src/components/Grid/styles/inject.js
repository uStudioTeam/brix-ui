import { css } from 'styled-components';
import { Mixin } from '../../../theme';
import { getAlignment, reverseDirection } from '../../../utils';

const [defaultGridDirection, defaultGridTemplate, defaultGridGap] = ['row', '', 0];

const getBreakpointData = ({ breakpoints, breakpoint }) =>
  breakpoints?.[breakpoint] ? { ...breakpoints?.[breakpoint] } : {};

const gridContainerStyles = ({ breakpoints }) => {
  return Object.keys(Mixin.Screen).reduce((styles, breakpoint) => {
    const {
      maxWidth = `var(--bp-${breakpoint})`,
      gap = defaultGridGap,
      direction = defaultGridDirection,
    } = getBreakpointData({ breakpoints, breakpoint });

    return css`
      ${styles};

      ${Mixin.Screen[breakpoint](css`
        max-width: calc(${maxWidth} - ${2 * (gap && direction === 'row' ? gap : 0)}px);
      `)};
    `;
  }, ``);
};

const gridTemplate = ({ direction = defaultGridDirection, template = defaultGridTemplate, divisions }) => {
  return css`
    ${`grid-template-${reverseDirection(direction)}s: ${template || `repeat(${divisions ?? 1}, 1fr)`}`};
  `;
};

const definedBreakpoints = breakpoints => Object.keys(breakpoints).filter(breakpoint => breakpoints[breakpoint]);

const gridBreakpointTemplate = ({ divisions, cellsCount, breakpoints }) => {
  if (definedBreakpoints(breakpoints).length) {
    return definedBreakpoints(breakpoints).reduce((styles, breakpoint) => {
      const {
        direction = defaultGridDirection,
        template = defaultGridTemplate,
        gap = defaultGridGap,
        alignment,
      } = breakpoints[breakpoint];

      return css`
        ${styles};

        ${Mixin.Screen[breakpoint](css`
          ${gridTemplate({ direction, template, divisions: divisions[breakpoint] })};

          grid-gap: ${gap / 16}rem;

          ${getAlignment({ direction, alignment })};
        `)};
      `;
    }, ``);
  }

  return css`
    ${gridTemplate({ divisions: cellsCount })};
  `;
};

const cellTemplate = ({ cellsSizes, index, gridBreakpoints, breakpoints }) => {
  if (definedBreakpoints(breakpoints).length) {
    return definedBreakpoints(breakpoints).reduce((styles, breakpoint) => {
      const {
        direction: gridDirection = defaultGridDirection,
        template: gridTemplate = defaultGridTemplate,
      } = getBreakpointData({
        breakpoints: gridBreakpoints,
        breakpoint,
      });

      const { size = 1, offset } = getBreakpointData({ breakpoints, breakpoint });
      const { before: offsetBefore = 0 } = offset || {};

      const start = cellsSizes[breakpoint].slice(0, index).reduce((allSizes, currentSize) => allSizes + currentSize, 1);

      return css`
        ${styles};

        ${Mixin.Screen[breakpoint](
          css`grid-${gridDirection}: ${
            gridTemplate || !gridDirection ? 'auto' : `${start + offsetBefore} / span ${size}`
          }`
        )};
      `;
    }, ``);
  }

  return css`
    grid-${defaultGridDirection}: auto;
  `;
};

export const inject = { gridBreakpointTemplate, gridContainerStyles, cellTemplate };
