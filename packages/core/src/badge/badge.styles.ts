import styled, { css } from 'styled-components';

import { applyDisplayNames } from '@brix-ui/utils/functions';
import { Align } from '@brix-ui/types/css';
import { Color } from '@brix-ui/types/palette';

import type { BadgeProps } from './badge.props';

const parsePosition = (position: BadgeProps['horizontalPosition']): string => {
  switch (position) {
    case Align.Center:
      return '50%';
    case Align.End:
      return '100%';
    case Align.Start:
    default:
      return '0';
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
    const color = $color || theme.colorHelper.getContrastingColor(backgroundColor);

    return css`
      display: flex;
      align-items: center;
      justify-content: center;

      min-width: 16px;
      min-height: 16px;

      padding: 0 4px 0;

      border-radius: 10px;

      background: ${backgroundColor};
      color: ${color};

      white-space: nowrap;

      line-height: 1;

      &[data-long-value] {
        padding: 0 6px 0;
      }

      &[data-has-children] {
        position: absolute;
        top: ${parsePosition(verticalPosition)};
        left: ${parsePosition(horizontalPosition)};

        transform: translate(${calculateTranslation(horizontalOffset)}, ${calculateTranslation(verticalOffset)});
      }
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
