import styled, { css } from 'styled-components';

import { applyDisplayNames } from '@ustudio-ui/utils/functions';
import { font } from '@ustudio-ui/theme/mixin';
import { Align } from '@ustudio-ui/types/css';
import { Color } from '@ustudio-ui/types/palette';

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

export const Badge = styled.div<
  Omit<BadgeProps, 'color' | 'backgroundColor' | 'value'> & {
    $color: BadgeProps['color'];
    $backgroundColor: BadgeProps['backgroundColor'];
    $value: BadgeProps['value'];
    hasChildren: boolean;
  }
>(
  ({
    $backgroundColor,
    $color,
    $value: value = '',
    horizontalPosition = Align.End,
    verticalPosition = Align.Start,
    horizontalOffset,
    verticalOffset,
    hasChildren,
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

      padding: 0 ${`${value}`.length > 1 ? 6 : 4}px 2px;

      border-radius: 10px;

      background: ${backgroundColor};
      color: ${color};

      white-space: nowrap;

      ${font.body.h5};

      line-height: 1;

      ${hasChildren &&
      css`
        position: absolute;
        top: ${parsePosition(verticalPosition)};
        left: ${parsePosition(horizontalPosition)};

        transform: translate(${calculateTranslation(horizontalOffset)}, ${calculateTranslation(verticalOffset)});
      `}
    `;
  }
);

export const BadgeContainer = styled.div(
  () => css`
    position: relative;
    display: inline-block;
  `
);

const Styled = applyDisplayNames({ Badge, BadgeContainer });

export default Styled;
