import styled, { css } from 'styled-components';

import { font } from '@ustudio-ui/theme/typography';
import { ColorTransformer } from '@ustudio-ui/theme/palette';
import { applyDisplayNames } from '@ustudio-ui/utils/functions';
import { Color } from '@ustudio-ui/types/palette';
import CloseIconComponent from '@ustudio-ui/utils/icons/close.inline.svg';

import type { TagProps } from './tag.props';

const Tag = styled.div<
  Omit<TagProps, 'color' | 'backgroundColor'> & {
    $color: TagProps['color'];
    $backgroundColor: TagProps['backgroundColor'];
  }
>(({ $color, $backgroundColor, theme }) => {
  const backgroundColor = $backgroundColor || theme.palette[Color.FaintWeak];

  return css`
    display: inline-flex;

    border-radius: 2px;

    background-color: ${backgroundColor};

    ${font.body.small};
    color: ${$color || ColorTransformer.getContrastingColor(backgroundColor)};

    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  `;
});

const Content = styled.div`
  padding: 2px 8px 4px;

  cursor: default;
`;

const CloseIcon = styled(CloseIconComponent)<
  Omit<TagProps, 'color' | 'backgroundColor'> & {
    $color: TagProps['color'];
    $backgroundColor: TagProps['backgroundColor'];
  }
>(({ $color, $backgroundColor, theme }) => {
  const backgroundColor = $backgroundColor || theme.palette[Color.FaintWeak];

  return css`
    width: 0.5rem;
    height: 0.5rem;

    fill: ${$color || ColorTransformer.getContrastingColor(backgroundColor)};
  `;
});

const CloseContainer = styled.button<
  Omit<TagProps, 'color' | 'backgroundColor'> & {
    $color: TagProps['color'];
    $backgroundColor: TagProps['backgroundColor'];
  }
>(({ $color, $backgroundColor, theme }) => {
  const backgroundColor = $backgroundColor || theme.palette[Color.FaintWeak];

  const isDark = ColorTransformer.getBrightness($color || ColorTransformer.getContrastingColor(backgroundColor)) > 140;

  const getEffectOpacity = (coefficient: number) => coefficient * (isDark ? 5 : 1);

  return css`
    position: relative;

    padding: 6px 8px 4px;

    cursor: pointer;

    transition: all 0.2s;

    &:after {
      content: '';

      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      background-color: ${$color || ColorTransformer.getContrastingColor(backgroundColor)};
      opacity: 0;
    }

    &:hover {
      &:after {
        opacity: ${getEffectOpacity(0.03)};
      }
    }

    &:focus {
      &:after {
        opacity: ${getEffectOpacity(0.05)};
      }
    }

    &:active {
      &:after {
        opacity: ${getEffectOpacity(0.1)};
      }
    }
  `;
});

const Styled = applyDisplayNames({ Tag, Content, CloseContainer, CloseIcon });

export default Styled;
