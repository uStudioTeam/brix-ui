import styled, { css } from 'styled-components';

import type { OverlayProps } from './overlay.props';

const Overlay = styled.div<OverlayProps>(
  ({ onClose, isActive }) => css`
    --opacity: 0.5;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: 900;

    opacity: ${isActive ? 'var(--opacity)' : 0};
    cursor: ${onClose ? 'pointer' : 'default'};

    transition: all 200ms;
  `
);

const Styled = { Overlay };

export default Styled;
