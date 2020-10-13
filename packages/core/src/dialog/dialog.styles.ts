import styled, { css } from 'styled-components';
import FocusLock from 'react-focus-lock';
import type { ReactFocusLockProps } from 'react-focus-lock/interfaces';

import { font, shadow } from '@brix-ui/theme/mixin';
import { applyDisplayNames } from '@brix-ui/utils/functions';

import Flex from '../flex';
import Text from '../text';

const Dialog = styled(FocusLock)<
  {
    isOpen: boolean;
    transitionSpeed?: number;
    $top: string;
    $margin: string;
    $maxWidth: string;
    $maxHeight: string;
  } & ReactFocusLockProps
>(
  ({ isOpen, transitionSpeed, $top: top, $margin: margin, $maxWidth: maxWidth, $maxHeight: maxHeight }) => css`
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
    max-width: ${maxWidth};

    margin: 0 var(--margin);

    border-radius: 4px;
    box-shadow: ${shadow('base-strong', 0.1)};

    opacity: ${isOpen ? 1 : 0};

    transform: translate(calc(-50% - var(--margin)), -50%);

    transition: all ${transitionSpeed !== undefined ? `${transitionSpeed}ms` : `var(--transition-long)`};
  `
);

const Header = styled(Flex).attrs<{
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

    transition: all var(--transition-short);
  `
);

const Title = styled(Text).attrs(() => ({
  forwardedAs: 'h2',
  variant: 'h5',
  lineHeightCompensation: true,
}))`
  color: var(--title-color);

  transition: all var(--transition-short);
`;

const Body = styled(Flex).attrs(() => ({
  forwardedAs: 'article',
  direction: 'column',
  verticalAlign: 'space-between',
}))`
  padding: var(--padding);

  flex-grow: 1;

  color: var(--c-base-strong);
  background-color: var(--c-base-weak);

  transition: all var(--transition-short);
`;

const Styled = applyDisplayNames({ Dialog, Header, Title, Body });

export default Styled;
