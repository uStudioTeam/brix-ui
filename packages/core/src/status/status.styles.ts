import styled, { css, Keyframes, keyframes } from 'styled-components';
import { applyDisplayNames } from '@ustudio-ui/utils/functions';

import type { StatusProps } from './status.props';

const parseBackgroundColor = (intent: StatusProps['intent'], isWeak: StatusProps['isWeak']): string => {
  if (isWeak) {
    switch (intent) {
      case 'success':
        return 'success-weak-up';
      case 'critical':
        return 'critical-weak-up';
      case 'accent':
      default:
        return 'accent-weak-up';
    }
  }
  switch (intent) {
    case 'success':
      return 'success-strong-up';
    case 'critical':
      return 'critical-strong-up';
    case 'accent':
    default:
      return 'accent-strong-up';
  }
};

const parseBorderColor = (intent: StatusProps['intent'], isWeak: StatusProps['isWeak']): string => {
  if (isWeak) {
    switch (intent) {
      case 'success':
        return 'success-weak-down';
      case 'critical':
        return 'critical-weak-down';
      case 'accent':
      default:
        return 'accent-weak-down';
    }
  }
  switch (intent) {
    case 'success':
      return 'success-weak-up';
    case 'critical':
      return 'critical-weak-up';
    case 'accent':
    default:
      return 'accent-weak-up';
  }
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
                  border-width: 0
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
  ({ theme, intent = 'accent', isWeak, $animation = 'none' }) => {
    const parseBackground = parseBackgroundColor(intent, isWeak);
    const parseBorder = parseBorderColor(intent, isWeak);

    const color = theme.colorHelper.parseColor(parseBackground);
    const borderColor = theme.colorHelper.parseColor(parseBorder);

    return css`
      width: 10px;
      height: 10px;

      background: ${color};

      border: 2px solid ${borderColor};
      border-radius: 10px;

      animation: ${parseAnimation($animation)} 2s infinite;
    `;
  }
);

const Styled = applyDisplayNames({ Status });

export default Styled;
