import styled, { css } from 'styled-components';

import { font } from '@ustudio-ui/theme/typography';
import { ColorTransformer } from '@ustudio-ui/theme/palette';
import { applyDisplayNames } from '@ustudio-ui/utils/functions';
import CloseIconComponent from '@ustudio-ui/utils/icons/close.inline.svg';

import type { TagProps } from './tag.props';

const Tag = styled.div<
  Omit<TagProps, 'color' | 'backgroundColor'> & {
    $color: TagProps['color'];
    $backgroundColor: TagProps['backgroundColor'];
  }
>(({ $color, $backgroundColor, theme }) => {
  const backgroundColor = $backgroundColor || theme.palette['faint-w'];

  return css`
    display: inline-flex;

    border-radius: 2px;
    background-color: ${backgroundColor};

    color: ${$color || ColorTransformer.getContrastingColor(backgroundColor)};
    ${font.body.small};
  `;
});

const Content = styled.div`
  padding: 2px 6px;

  cursor: default;
`;

const CloseIcon = styled(CloseIconComponent)`
  width: 0.5rem;
  height: 0.5rem;

  fill: var(--c-base-s);
  opacity: 0.5;
`;

const CloseContainer = styled.div`
  display: flex;
  align-self: stretch;
  align-items: center;

  padding: 2px 6px;

  cursor: pointer;

  transition: all 0.5s;

  &:hover {
    ${CloseIcon} {
      opacity: 0.25;
    }
  }

  &:focus {
    ${CloseIcon} {
      opacity: 1%;
    }
  }

  &:active {
    ${CloseIcon} {
      fill: var(--base-s-d);
      opacity: 0.75;
    }
  }
`;

const Styled = applyDisplayNames({ Tag, Content, CloseContainer, CloseIcon });

export default Styled;
