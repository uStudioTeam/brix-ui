import styled, { css } from 'styled-components';

import { applyDisplayNames, createCustomProperties } from '@brix-ui/utils/functions';
import { font, shadow } from '@brix-ui/theme/mixin';
import Chevron from '@brix-ui/icons/chevron';

import Flex from '../flex';
import { DisclosureProps } from './disclosure.props';

const Container = styled(Flex)<Pick<DisclosureProps, 'customProperties'>>(
  ({ customProperties }) => css`
    ${createCustomProperties(customProperties, {
      iconIndent: '1rem',
    })};

    color: var(--c-base-strong);

    border: 1px solid var(--c-faint-weak-up);
    border-radius: 4px;

    ${font.body.p};

    overflow: hidden;

    &:active {
      transform: scale(0.9985);
    }

    transition: all var(--transition-short);

    &[aria-disabled='false'] {
      &:hover {
        box-shadow: ${shadow('base-strong', 0.1)};
      }
    }

    &[data-expanded='true'] {
      box-shadow: ${shadow('accent-strong', 0.15)};
    }
  `
);

const Icon = styled(Chevron)`
  width: 10px;
  height: 6px;

  justify-self: flex-end;

  transition: transform var(--transition-short);
`;

const Summary = styled.button(
  () => css`
    padding: 12px 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--c-base-weak);

    cursor: pointer;

    opacity: 1;

    transition: all var(--transition-short);

    &:disabled {
      background-color: var(--c-faint-weak);

      cursor: not-allowed;

      &,
      ${Icon} {
        color: var(--c-faint-strong-down);
      }
    }

    & > *:last-child {
      margin-left: var(--icon-indent);
    }

    &:focus {
      background-color: var(--c-faint-weak-down);
    }

    &[data-expanded='true'] {
      background-color: var(--c-faint-weak-down);

      ${Icon} {
        color: var(--c-accent-strong);

        transform: rotate(-180deg);
      }
    }

    &[data-expanded='false'] {
      ${Icon} {
        color: var(--c-base-strong);

        transform: rotate(0deg);
      }
    }
  `
);

const Details = styled.div<{
  transitionSpeed?: number;
}>(
  ({ transitionSpeed }) => css`
    background-color: var(--c-base-weak);

    overflow-y: hidden;

    transition: all ${transitionSpeed !== undefined ? `${transitionSpeed}ms` : 'var(--transition-long)'};

    div {
      padding: 12px 16px;
    }
  `
);

const Styled = applyDisplayNames({ Container, Icon, Summary, Details });

export default Styled;
