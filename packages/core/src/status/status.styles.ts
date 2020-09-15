import styled, { css } from 'styled-components';
import { applyDisplayNames } from '@ustudio-ui/utils/functions';

import type { StatusProps } from './status.props';

const parseBackgroundColor = (intent: StatusProps['intent'], isWeak: StatusProps['isWeak']): string => {
  if (isWeak) {
    switch (intent) {
      case 'success':
        return '#ADEC93';
      case 'critical':
        return '#FAD789';
      case 'accent':
      default:
        return '#9CC6F0';
    }
  }
  switch (intent) {
    case 'success':
      return '#149657';
    case 'critical':
      return '#D36A3D';
    case 'accent':
    default:
      return '#1a81db';
  }
};

const parseBorderColor = (intent: StatusProps['intent'], isWeak: StatusProps['isWeak']): string => {
  if (isWeak) {
    switch (intent) {
      case 'success':
        return '#F3F9F0';
      case 'critical':
        return '#FBF4E5';
      case 'accent':
      default:
        return '#EFF5FA';
    }
  }
  switch (intent) {
    case 'success':
      return '#E6F7DF';
    case 'critical':
      return '#FCEDCA';
    case 'accent':
    default:
      return '#D4E7FA';
  }
};

const parseAnimation = (animation: StatusProps['animation']): string => {
  switch (animation) {
    case 'pulsing':
      return ` -webkit-animation: pulsing 2s infinite;
                animation: pulsing 2s infinite;
                
                @-webkit-keyframes pulsing {   
                    0% {     
                -webkit-transform: scale(0.5, 0.5);     
                transform: scale(1.3, 1.3);
                     }
                    50% {
                -webkit-transform: scale(1, 1);
                transform: scale(1, 1);
                     }
                    100% {
                -webkit-transform: scale(0.5, 0.5);
                transform: scale(1.3, 1.3);
                    }
                }
                
                @keyframes pulsing {
                     0% {
                -webkit-transform: scale(0.5, 0.5);
                transform: scale(1.3, 1.3);
                    }
                    50% {
                -webkit-transform: scale(1, 1);
                transform: scale(1, 1);
                    }
                    100% {
                -webkit-transform: scale(0.5, 0.5);
                transform: scale(1.3, 1.3);
                    }
                }`;

    case 'saturating':
      return `-webkit-animation: saturating 1s infinite;
                animation: saturating 1s infinite;
                
                @-webkit-keyframes saturating {   
                    0% {     
                opacity: 1;
                     }
                    50% {
                opacity: 0.5;
                     }
                    100% {
                opacity: 1;
                    }
                }
                
                @keyframes saturating {
                     0% {
                 opacity: 1;
                    }
                    50% {
                 opacity: 0.5;
                    }
                    100% {
                 opacity: 1;
                    }
                }`;

    case 'none':
    default:
      return '';
  }
};

const Status = styled.div<StatusProps>(
  ({ intent = 'accent', isWeak, animation = 'none' }) => css`
    width: 10px;
    height: 10px;
    background: ${parseBackgroundColor(intent, isWeak)};
    border-radius: 10px;
    border: 2px solid ${parseBorderColor(intent, isWeak)};
    ${parseAnimation(animation)}
  `
);

const Styled = applyDisplayNames({ Status });

export default Styled;
