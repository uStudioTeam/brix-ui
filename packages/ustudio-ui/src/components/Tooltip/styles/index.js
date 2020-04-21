import styled, { css } from 'styled-components';
import { Mixin } from '../../../theme';
import { StyledComponents } from '../../../utils/styles/styled-component';
import Text from '../../Text';
import { inject } from './inject';

const Tooltip = styled.span(
  ({ position }) => css`
  position: absolute;
  
  ${inject.indent(position)};

  display: block;
  width: max-content;
  padding: var(--i-small) var(--i-medium);
  opacity: 0;
  z-index: var(--l-bottom);

  background-color: var(--c-light);
  border-radius: var(--border-radius);
  box-shadow: var(--s-light);

  transform: ${inject.translateByPosition(position)};
  
  transition: opacity var(--transition);
  transition-delay: 5ms;

  pointer-events: none;

  &:before {
    content: '';

    position: absolute;
    
    ${inject.reversePosition(position)}: -0.5rem;
    
    // center by opposite axis
    ${inject.sidePositions(position)[0]}: 50%;

    // triangle from borders
    border-${position}: var(--i-medium) solid var(--c-light);
    
    ${inject.sideBordersByPosition(position)};

    ${inject.compensateCentring(position)}

  };
}`
);

const TooltipContainer = styled.span`
  position: relative;
  border-bottom: 1px dotted var(--c-dark);
  cursor: default;

  ${Mixin.Device.mobile(css`
    &:active {
      cursor: help;

      ${Tooltip} {
        pointer-events: auto;
        opacity: 1;
        user-select: none;
      }
    }
  `)}

  ${Mixin.Device.desktop(css`
    &:hover {
      cursor: help;

      ${Tooltip} {
        pointer-events: auto;
        opacity: 1;
        user-select: none;
      }
    }
  `)}
`;

const Content = styled(Text)``

export const Styled = StyledComponents({ TooltipContainer, Tooltip, Content });
