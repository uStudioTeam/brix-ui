import Times from '@brix-ui/icons/times';
import styled, { css } from 'styled-components';
import FocusLock from 'react-focus-lock';
import type { ReactFocusLockProps } from 'react-focus-lock/interfaces';

import { font, shadow, size } from '@brix-ui/theme/mixin';
import { applyDisplayNames } from '@brix-ui/utils/functions';

import Button from '../button';
import Flex from '../flex';
import Text from '../text';

export const Dialog = styled(FocusLock)<
  {
    isOpen: boolean;
    $top: string;
    $margin: string;
    $maxWidth: string;
    $maxHeight: string;
  } & ReactFocusLockProps
>(
  ({ isOpen, $top: top, $margin: margin, $maxWidth: maxWidth, $maxHeight: maxHeight }) => css`
    --margin: ${margin};
    --padding: 1rem;
    --title-color: var(--c-faint-strong);

    position: fixed;
    top: ${top};
    left: 50%;
    z-index: 1000;

    overflow: hidden;

    height: fit-content;
    max-height: ${maxHeight};
    width: fit-content;
    width: -moz-fit-content;
    max-width: ${maxWidth};

    margin: 0 var(--margin);

    border-radius: 4px;
    box-shadow: ${shadow('base-strong', 0.1)};

    opacity: ${isOpen ? 1 : 0};

    transform: translate(calc(-50% - var(--margin)), -50%);

    transition: all 200ms;
  `
);

export const Header = styled(Flex).attrs<{
  $titleAlign: 'left' | 'center' | undefined;
}>(({ $titleAlign: titleAlign }) => ({
  forwardedAs: 'header',
  verticalAlign: 'center',
  horizontalAlign: titleAlign === 'left' ? 'start' : titleAlign,
}))<{
  $titleAlign: 'left' | 'center' | undefined;
}>(
  ({ $titleAlign: titleAlign }) => css`
    position: relative;

    height: 28px;

    padding: 0 44px 0 ${titleAlign === 'center' ? '44px' : '8px'};

    ${font.body.h5};

    background-color: var(--c-faint-weak-down);

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    transition: all 200ms;
  `
);

export const Title = styled(Text).attrs(() => ({
  forwardedAs: 'h2',
  variant: 'h5',
  lineHeightCompensation: true,
}))`
  color: var(--title-color);

  transition: all 200ms;
`;

export const CloseButton = styled(Button).attrs(() => ({
  isRounded: true,
  appearance: 'faint',
  intent: 'critical',
}))`
  ${size('12px')};

  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 200ms;
`;

export const CloseContainer = styled(Flex).attrs(() => ({
  forwardedAs: 'label',
  align: 'center',
}))`
  position: absolute;
  top: 0;
  right: 0;

  ${size('28px')};

  transition: all 200ms;

  cursor: pointer;

  &:active {
    ${CloseButton} {
      transform: scale(0.875);
    }
  }
`;

export const CloseIcon = styled(Times)`
  ${size('8px')};

  transition: all 200ms;
`;

export const Body = styled(Flex).attrs(() => ({
  forwardedAs: 'article',
  direction: 'column',
  verticalAlign: 'space-between',
}))`
  padding: var(--padding);

  flex-grow: 1;

  color: var(--c-base-strong);
  background-color: var(--c-base-weak);

  transition: all 200ms;
`;

const Styled = applyDisplayNames({ Dialog, Header, Title, CloseContainer, CloseButton, CloseIcon, Body });

export default Styled;
