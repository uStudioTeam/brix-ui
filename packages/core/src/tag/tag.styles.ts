import styled, { css } from 'styled-components';

import { font } from '@ustudio-ui/theme/typography';
import { ColorTransformer } from '@ustudio-ui/theme/palette';
import { Color } from '@ustudio-ui/types/palette';
import { applyDisplayNames } from '@ustudio-ui/utils/functions';
import CloseIconComponent from '@ustudio-ui/utils/icons/close.inline.svg';

import type { TagProps } from './tag.props';

const getEffectOpacity = (baseValue: number, isColorDark: boolean) => {
  return baseValue * (isColorDark ? 4 : 1);
};

const Tag = styled.div<
  Omit<TagProps, 'color' | 'backgroundColor'> & {
    $color: TagProps['color'];
    $backgroundColor: TagProps['backgroundColor'];
  }
>(({ $color, $backgroundColor, theme }) => {
  const backgroundColor = $backgroundColor || theme.palette[Color.FaintWeak];
  const color = $color || ColorTransformer.getContrastingColor(backgroundColor, theme);

  const isColorDark = ColorTransformer.getBrightness(color) > 140;

  return css`
    display: inline-flex;

    border-radius: 2px;

    background-color: ${backgroundColor};

    ${font.body.small};
    color: ${color};

    &:not(:last-child) {
      margin-right: 0.5rem;
    }

    ${CloseContainer} {
      &:after {
        background-color: ${color};
      }

      &:hover {
        &:after {
          opacity: ${getEffectOpacity(0.03, isColorDark)};
        }
      }

      &:focus {
        &:after {
          opacity: ${getEffectOpacity(0.05, isColorDark)};
        }
      }

      &:active {
        &:after {
          opacity: ${getEffectOpacity(0.1, isColorDark)};
        }
      }

      ${CloseIcon} {
        fill: ${color};
      }
    }
  `;
});

const Content = styled.div`
  padding: 4px 8px 6px;

  cursor: default;
`;

const CloseIcon = styled(CloseIconComponent)`
  width: 0.5rem;
  height: 0.5rem;
`;

const CloseContainer = styled.button`
  position: relative;

  padding: 4px 8px;

  cursor: pointer;

  &:after {
    content: '';

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    opacity: 0;

    transition: all 0.2s;
  }
`;

const Styled = applyDisplayNames({ Tag, Content, CloseContainer, CloseIcon });

export default Styled;
