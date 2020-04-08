import { css } from 'styled-components';
import { Mixin } from '../../../theme';
import { getAlignment, reverseDirection } from '../../../utils';

const [defaultGridDirection, defaultGridTemplate, defaultGridGap] = ['row', '', 0];

const _definedBreakpoints = ({ breakpoints, divisions, cellsCount }) => {
  return Object.keys(breakpoints).filter(breakpoint => breakpoints[breakpoint] || divisions[breakpoint] !== cellsCount);
};

const _getElementTemplate = (breakpoints, { breakpointTemplateCallback, defaultTemplate }) => {
  if (breakpoints.length) {
    return breakpoints.reduce(
      (destinationTemplate, breakpoint) => breakpointTemplateCallback({ destinationTemplate, breakpoint }),
      ``
    );
  }

  return defaultTemplate;
};

const _getBreakpointData = ({ breakpoints, breakpoint }) =>
  breakpoints?.[breakpoint] ? { ...breakpoints[breakpoint] } : {};

const _gridTemplate = ({ direction = defaultGridDirection, template = defaultGridTemplate, divisions }) => {
  return css`
    ${`grid-template-${reverseDirection(direction)}s: ${template || `repeat(${divisions}, 1fr)`}`};
    ${`grid-template-${direction}s: unset;`};
  `;
};

const gridContainerStyles = ({ breakpoints }) => {
  return Object.keys(Mixin.Screen).reduce((styles, breakpoint) => {
    const {
      maxWidth = `var(--bp-${breakpoint})`,
      gap = defaultGridGap,
      direction = defaultGridDirection,
    } = _getBreakpointData({ breakpoints, breakpoint });

    return css`
      ${styles};

      ${Mixin.Screen[breakpoint](css`
        max-width: calc(${maxWidth}px - ${2 * (gap && direction === 'row' ? gap : 0)}px);
      `)};
    `;
  }, ``);
};

const gridBreakpointTemplate = ({ divisions, cellsCount, breakpoints }) => {
  return _getElementTemplate(_definedBreakpoints({ breakpoints, divisions, cellsCount }), {
    breakpointTemplateCallback: ({ destinationTemplate, breakpoint }) => {
      const { direction = defaultGridDirection, template = defaultGridTemplate, gap = defaultGridGap, alignment } =
        breakpoints[breakpoint] || {};

      return css`
        ${destinationTemplate};

        ${Mixin.Screen[breakpoint](css`
          ${_gridTemplate({ direction, template, divisions: divisions[breakpoint] })};

          grid-gap: ${gap / 16}rem;

          ${getAlignment({ direction, alignment })};
        `)};
      `;
    },
    defaultTemplate: css`
      ${_gridTemplate({ divisions: cellsCount })};
    `,
  });
};

const cellTemplate = ({ cellsSizes, index, gridBreakpoints, breakpoints, offsets }) => {
  return _getElementTemplate(
    Object.keys(breakpoints).filter(
      breakpoint => breakpoints[breakpoint] || (offsets[breakpoint]?.[index - 1] || 0) !== 0
    ),
    {
      breakpointTemplateCallback: ({ destinationTemplate, breakpoint }) => {
        const {
          direction: gridDirection = defaultGridDirection,
          template: gridTemplate = defaultGridTemplate,
        } = _getBreakpointData({
          breakpoints: gridBreakpoints,
          breakpoint,
        });

        const { size = 1, offset } = _getBreakpointData({ breakpoints, breakpoint });
        const { before: offsetBefore = 0 } = offset || {};

        const start = cellsSizes[breakpoint]
          .slice(0, index)
          .reduce((allSizes, currentSize) => allSizes + currentSize, 1);

        return css`
          ${destinationTemplate};

          ${!gridTemplate
            ? css`
                ${Mixin.Screen[breakpoint](
                  css`grid-${reverseDirection(gridDirection)}: ${start +
                    offsetBefore +
                    (offsets?.[index - 1] || 0)} / span ${size}`
                )}
              `
            : ``};
        `;
      },
      defaultTemplate: css`
      grid-${defaultGridDirection}: unset;
    `,
    }
  );
};

export const inject = { gridBreakpointTemplate, gridContainerStyles, cellTemplate };
