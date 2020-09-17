import styled, { css, Keyframes, keyframes } from 'styled-components';
import { applyDisplayNames } from '@ustudio-ui/utils/functions';

import type { StatusProps } from './status.props';

const parseBackgroundColor = (intent: StatusProps['intent'], isWeak: StatusProps['isWeak']): string => {
  return `${intent}-${isWeak ? 'weak' : 'strong'}-up`;
};

const parseBorderColor = (intent: StatusProps['intent'], isWeak: StatusProps['isWeak']): string => {
  return `${intent}-weak-${isWeak ? 'down' : 'up'}`;
};

const parseAnimation = (animation: StatusProps['animation']): Keyframes => {
  switch (animation) {
    case 'pulsing':
      return keyframes`
                0% {
                  transform: scale(1);
                }
                50% {
                  transform: scale(1.3);
                  border-width: 0;
                }
                100% {
                  transform: scale(1);
                }`;

    case 'saturating':
      return keyframes`
                0% {
                  opacity: 1;
                }
                50% {
                  opacity: 0.5;
                }
                100% {
                  opacity: 1;
                }`;
    case 'none':
    default:
      return keyframes``;
  }
};

const Status = styled.div<Omit<StatusProps, 'animation'> & { $animation: StatusProps['animation'] }>(
  ({ intent = 'accent', isWeak, $animation = 'none' }) => css`
    width: 10px;
    height: 10px;

    background: var(--c-${parseBackgroundColor(intent, isWeak)});

    border: 2px solid var(--c-${parseBorderColor(intent, isWeak)});
    border-radius: 10px;

    animation: ${parseAnimation($animation)} 2s infinite;
  `
);

const Styled = applyDisplayNames({ Status });

export default Styled;
