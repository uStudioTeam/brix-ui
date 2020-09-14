import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import { applyDisplayNames } from '@ustudio-ui/utils/functions';
import { Color } from '@ustudio-ui/types/palette';
import { font } from '@ustudio-ui/theme/typography';

import Flex from '../flex';
import Chevron from '../../assets/icons/chevron.inline.svg';

import type { DisclosureProps } from './disclosure.props';

export const Container = styled(Flex)<{
  isOpen: DisclosureProps['isOpen'];
  isDisabled: DisclosureProps['isDisabled'];
}>(
  ({ isOpen, isDisabled, theme }) => css`
    color: var(--c-base-strong);

    border: 1px solid var(--c-faint-weak-up);
    border-radius: 4px;

    ${font.body.p};

    overflow: hidden;

    &:active {
      transform: scale(0.9985);
    }

    transition: all 200ms;

    ${!isDisabled &&
    css`
      &:hover {
        box-shadow: 0 2px 8px 0 ${transparentize(0.9, theme.palette[Color.BaseStrong])};
      }
    `}

    ${isOpen &&
    css`
      box-shadow: 0 2px 8px 0 ${transparentize(0.85, theme.palette[Color.AccentStrong])};
    `}
  `
);

export const Icon = styled(Chevron)`
  width: 10px;
  height: 6px;

  justify-self: flex-end;

  transition: transform 200ms;
`;

export const Summary = styled.button<{
  isOpen: NonNullable<DisclosureProps['isOpen']>;
}>(
  ({ isOpen }) => css`
    padding: 12px 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--c-base-weak);

    cursor: pointer;

    opacity: 1;

    transition: all 200ms;

    &:disabled {
      background-color: var(--c-faint-weak);

      cursor: not-allowed;

      &,
      ${Icon} {
        color: var(--c-faint-strong-down);
      }
    }

    & > *:last-child {
      margin-left: 1rem;
    }

    &:focus {
      background-color: var(--c-faint-weak-down);
    }

    ${isOpen
      ? css`
          background-color: var(--c-faint-weak-down);

          ${Icon} {
            color: var(--c-accent-strong);

            transform: rotate(-180deg);
          }
        `
      : css`
          ${Icon} {
            color: var(--c-base-strong);

            transform: rotate(0deg);
          }
        `};
  `
);

export const Details = styled.div(
  () => css`
    background-color: var(--c-base-weak);

    overflow-y: hidden;

    transition: all 200ms;

    div {
      padding: 12px 16px;
    }
  `
);

const Styled = applyDisplayNames({ Container, Icon, Summary, Details });

export default Styled;
