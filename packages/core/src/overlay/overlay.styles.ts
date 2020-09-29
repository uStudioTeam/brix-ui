import styled, { css } from 'styled-components';

import { applyDisplayNames } from '@brix-ui/utils/functions';

import type { OverlayProps } from './overlay.props';

const Overlay = styled.div<OverlayProps>(
  ({ onClose, isOpen }) => css`
    --opacity: 0.5;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: 900;

    opacity: ${isOpen ? 'var(--opacity)' : 0};
    cursor: ${onClose ? 'pointer' : 'default'};

    transition: all 200ms;
  `
);

const Styled = applyDisplayNames({ Overlay });

export default Styled;
