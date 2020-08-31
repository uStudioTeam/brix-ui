import styled, { css } from 'styled-components';

import { font } from '@ustudio-ui/theme/typography';
import { ColorTransformer } from '@ustudio-ui/theme/palette';
import { Color } from '@ustudio-ui/types/palette';
import { applyDisplayNames } from '@ustudio-ui/utils/functions';
import CloseIconComponent from '@ustudio-ui/utils/icons/close.inline.svg';

import type { TagProps } from './tag.props';

const CloseIcon = styled(CloseIconComponent)`
  width: 0.5rem;
  height: 0.5rem;
`;

const CloseContainer = styled.button`
  position: relative;

  padding: 4px 8px;

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

    border-radius: 0 2px 2px 0;

    transition: all 0.2s;
  }
`;

const Tag = styled.div<
  Omit<TagProps, 'color' | 'backgroundColor'> & {
    $color: TagProps['color'];
    $backgroundColor: TagProps['backgroundColor'];
  }
>(({ $color, $backgroundColor, theme }) => {
  const backgroundColor = $backgroundColor || theme.palette[Color.FaintWeak];
  const color = $color || ColorTransformer.getContrastingColor(backgroundColor, theme);

  return css`
    display: inline-flex;

    border-radius: 2px;

    background-color: ${backgroundColor};

    ${font.body.small};
    color: ${color};

    ${CloseContainer} {
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

const Content = styled.div`
  padding: 4px 8px 6px;

  cursor: default;
`;

const Styled = applyDisplayNames({ Tag, Content, CloseContainer, CloseIcon });

export default Styled;
