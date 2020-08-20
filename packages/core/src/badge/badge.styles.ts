import styled, { css } from 'styled-components';

import { applyDisplayNames } from '@ustudio-ui/utils/functions';
import { font } from '@ustudio-ui/theme/typography';
import { ColorTransformer } from '@ustudio-ui/theme/palette';
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

const calculateTranslation = (offset: BadgeProps['horizontalOffset']): string => {
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
  }) => {
    const backgroundColor = $backgroundColor || theme.palette[Color.FaintWeak];
    const color = $color || ColorTransformer.getContrastingColor(backgroundColor);

    return css`
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

      background: ${backgroundColor};
      color: ${color};

      white-space: nowrap;

      transform: translate(${calculateTranslation(horizontalOffset)}, ${calculateTranslation(verticalOffset)});

      ${font.body.h5};
    `;
  }
);

const BadgeContainer = styled.div(
  () => css`
    position: relative;
    display: inline-block;
  `
);

const Styled = applyDisplayNames({ Badge, BadgeContainer });

export default Styled;
