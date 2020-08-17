import styled, { css } from 'styled-components';

import { applyDisplayNames } from '@ustudio-ui/utils/functions';
import { font } from '@ustudio-ui/theme/typography';
import { Align } from '@ustudio-ui/types/css';
import { Color } from '@ustudio-ui/types/palette';

import type { BadgeProps } from './badge.props';

const parsePosition = (position: BadgeProps['horizontalPosition']): string => {
  switch (position) {
    case Align.Center:
      return `50%`;
    case Align.End:
      return `100%`;
    case Align.Start:
    default:
      return `0`;
  }
};

const offsetCalculation = (offset: string | undefined) => {
  return `calc(${offset || '0px'} - 50%)`;
};

const Badge = styled.div<
  Omit<BadgeProps, 'color' | 'backgroundColor' | 'value'> & {
    $color: BadgeProps['color'];
    $backgroundColor: BadgeProps['backgroundColor'];
  }
>(
  ({
    $backgroundColor,
    $color,
    horizontalPosition = Align.End,
    verticalPosition = Align.Start,
    horizontalOffset,
    verticalOffset,
    theme,
  }) => css`
    position: absolute;
    top: ${parsePosition(verticalPosition)};
    left: ${parsePosition(horizontalPosition)};

    display: flex;
    align-items: baseline;
    justify-content: center;

    min-width: 12px;
    min-height: 12px;

    padding: 0 0.375rem 0.125rem;

    border-radius: 10px;

    background: ${$backgroundColor || theme.palette[Color.FaintWeak]};
    color: ${$color};

    white-space: nowrap;

    transform: translate(${offsetCalculation(horizontalOffset)}, ${offsetCalculation(verticalOffset)});

    ${font.body.h5};
  `
);

const BadgeContainer = styled.div(
  () => css`
    position: relative;
    display: inline-block;
  `
);

const Styled = applyDisplayNames({ Badge, BadgeContainer });

export default Styled;
