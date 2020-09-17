import styled, { css } from 'styled-components';

import { font } from '@ustudio-ui/theme/mixin';
import { Color } from '@ustudio-ui/types/palette';
import { applyDisplayNames } from '@ustudio-ui/utils/functions';

import Times from '../../assets/icons/times.inline.svg';

import type { TagProps } from './tag.props';

export const CloseIcon = styled(Times)`
  width: 0.5rem;
  height: 0.5rem;
`;

export const CloseButton = styled.button`
  position: relative;

  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: all 0.2s;

  &:after {
    content: '';

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    opacity: 0;

    border-radius: 2px;

    transition: all 0.2s;
  }
`;

export const Container = styled.div<
  Omit<TagProps, 'color' | 'backgroundColor'> & {
    $color: TagProps['color'];
    $backgroundColor: TagProps['backgroundColor'];
  }
>(({ $color, $backgroundColor, theme }) => {
  const backgroundColor = $backgroundColor || theme.palette[Color.FaintWeak];
  const color = $color || theme.colorHelper.getContrastingColor(backgroundColor);

  return css`
    display: inline-flex;

    border-radius: 2px;

    background-color: ${backgroundColor};

    color: ${color};

    ${CloseButton} {
      &:after {
        background-color: ${color};
      }

      &:hover {
        &:after {
          opacity: 0.12;
        }
      }

      &:focus {
        &:after {
          opacity: 0.2;
        }
      }

      &:active {
        transform: scale(0.95);
      }

      ${CloseIcon} {
        fill: ${color};
      }
    }
  `;
});

export const Content = styled.div`
  padding: 6px 8px;

  ${font.body.small};

  cursor: default;

  &,
  & > * {
    line-height: 1;
  }
`;

const Styled = applyDisplayNames({ Container, Content, CloseButton, CloseIcon });

export default Styled;
