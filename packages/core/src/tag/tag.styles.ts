import { size } from '@brix-ui/theme/mixin';
import styled, { css } from 'styled-components';

import { Color } from '@brix-ui/types/palette';
import { applyDisplayNames } from '@brix-ui/utils/functions';
import Times from '@brix-ui/icons/times';

import Flex from '../flex';

import type { TagProps } from './tag.props';

const CloseIcon = styled(Times)`
  ${size('12px')};

  position: relative;
  top: 1px;
`;

const CloseButton = styled.button`
  position: relative;

  ${size('24px')};

  display: flex;
  justify-content: center;
  align-items: center;

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

const Container = styled.div<
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

const Content = styled(Flex)`
  padding: 6px 8px;

  cursor: default;

  &,
  & > * {
    line-height: 1;
  }
`;

const Styled = applyDisplayNames({ Container, Content, CloseButton, CloseIcon });

export default Styled;
