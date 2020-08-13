import styled, { css } from 'styled-components';

import { applyDisplayNames } from '@ustudio-ui/utils/functions';
import { font } from '@ustudio-ui/theme/typography';

import CloseIconComponent from '@ustudio-ui/utils/icons/close.inline.svg';

import Flex from '../flex';

import type { TagProps } from './tag.props';
import { ColorTransformer } from '@ustudio-ui/theme/palette';

const Tag = styled(Flex)<TagProps>(({ color, backgroundColor, theme }) => {
  const bgColor = backgroundColor || theme.palette['faint-w'];

  return css`
    border-radius: 2px;
    background-color: ${bgColor};

    cursor: default;

    ${font.body.small};
    color: ${color || ColorTransformer.getContrastingColor(bgColor)};
  `;
});

const Content = styled(Flex)`
  padding: 2px 6px;
`;

const CloseIcon = styled(CloseIconComponent)`
  width: 8px;
  height: 8px;

  fill: var(--c-base-s);
  opacity: 50%;
`;

const CloseContainer = styled(Flex)`
  padding: 2px 6px;
  align-self: stretch;
  align-items: center;

  cursor: pointer;

  transition: all 0.5s;

  &:hover {
    ${CloseIcon} {
      opacity: 25%;
    }
  }

  &:focus {
    ${CloseIcon} {
      opacity: 100%;
    }
  }

  &:active {
    ${CloseIcon} {
      fill: var(--base-s-d);
      opacity: 75%;
    }
  }
`;

const Styled = applyDisplayNames({ Tag, Content, CloseContainer, CloseIcon });

export default Styled;
