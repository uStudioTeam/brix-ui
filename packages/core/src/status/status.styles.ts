import styled, { css, keyframes } from 'styled-components';

import { applyDisplayNames } from '@brix-ui/utils/functions';
import { size } from '@brix-ui/theme/mixin';
import { Intent } from '@brix-ui/types/component';

import type { StatusProps } from './status.props';

const pulse = keyframes`
  0%,
  100% {
    background-color: var(--border-color);
  }
  
  50% {
    background-color: transparent;
  }
`;

const Status = styled.span<StatusProps>(({ intent: _intent = Intent.Base, isStatic, hasBorder = true }) => {
  const intent = _intent === Intent.Base ? 'faint' : _intent;

  return css`
    --size: 16px;
    --border-width: 4px;
    --border-color: var(--c-${intent}-weak-down);

    position: relative;

    ${size('var(--size)')};

    display: inline-block;

    background-color: ${hasBorder && 'var(--border-color)'};

    animation: ${!isStatic && hasBorder && pulse} 2s infinite;

    &,
    &:after {
      border-radius: 50%;
    }

    &:after {
      content: '';

      position: absolute;
      left: 50%;
      top: 50%;

      ${size('calc(var(--size) - var(--border-width) * 2)')};

      background-color: var(--c-${intent}-strong);

      transform: translate(-50%, -50%);
    }
  `;
});

const Styled = applyDisplayNames({ Status });

export default Styled;
