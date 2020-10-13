import styled, { css } from 'styled-components';

import { Intent } from '@brix-ui/types/component';

import Flex from '../flex';

import type { AlertProps } from './alert.props';

const Alert = styled(Flex)<Pick<AlertProps, 'intent'>>(({ intent: _intent = Intent.Base }) => {
  const intent = _intent === Intent.Base ? 'faint' : _intent;

  return css`
    position: relative;

    padding: 16px 48px 16px 16px;

    align-items: center;

    color: var(--c-${intent}-strong-up);
    background-color: var(--c-${intent}-weak-down);

    border-radius: 4px;

    transition: all var(--transition-short);

    &[data-show-status] {
      & > *:first-child {
        position: relative;
        top: 2px;

        margin-right: 1rem;

        align-self: start;
      }
    }

    &[data-should-close] {
      & > *:last-child {
        --icon-size: 16px;

        top: 12px;
        right: 14px;
      }
    }
  `;
});

const Styled = { Alert };

export default Styled;
