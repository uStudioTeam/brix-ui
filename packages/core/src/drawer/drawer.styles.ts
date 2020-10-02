import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { transparentize } from 'polished';
import FocusLock from 'react-focus-lock';
import type { ReactFocusLockProps } from 'react-focus-lock/interfaces';

import { applyDisplayNames } from '@brix-ui/utils/functions';

import type { DrawerProps } from './drawer.props';

const borderRadius = (position: DrawerProps['position']): FlattenSimpleInterpolation => {
  switch (position) {
    case 'top': {
      return css`
        border-bottom-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      `;
    }
    case 'right': {
      return css`
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      `;
    }
    case 'bottom': {
      return css`
        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
      `;
    }
    case 'left':
    default: {
      return css`
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      `;
    }
  }
};

const translate = ({ position, isOpen }: Pick<DrawerProps, 'position' | 'isOpen'>): string => {
  switch (position) {
    case 'top': {
      return `translateY(${isOpen ? 0 : '-100%'})`;
    }
    case 'right': {
      return `translateX(${isOpen ? 0 : '100%'})`;
    }
    case 'bottom': {
      return `translateY(${isOpen ? 0 : '100%'})`;
    }
    case 'left':
    default: {
      return `translateX(${isOpen ? 0 : '-100%'})`;
    }
  }
};

const isHorizontal = (position: DrawerProps['position']): boolean => position === 'left' || position === 'right';

const Drawer = styled(FocusLock)<
  Omit<DrawerProps, 'position'> & { $position: DrawerProps['position'] } & ReactFocusLockProps
>(
  ({ isOpen, $position: position, theme }) => css`
    --border-radius: 2px;
    --overflow: auto;

    ${isHorizontal(position) ? 'height' : 'width'}: 100%;
    max-${isHorizontal(position) ? 'height' : 'width'}: 100%;

    position: fixed;
    ${position}: 0;
    ${isHorizontal(position) ? 'top' : 'left'}: 0;

    z-index: 1000;

    background-color: var(--c-base-weak);
    ${borderRadius(position)};
    box-shadow: 0 0 16px ${transparentize(isOpen ? 0.95 : 1, theme.palette['base-strong'])};
    
    overflow-${isHorizontal(position) ? 'y' : 'x'}: var(--overflow);

    transform: ${translate({ position, isOpen })};

    transition: transform 200ms;
  `
);

const Styled = applyDisplayNames({ Drawer });

export default Styled;
