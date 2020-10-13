import styled, { css } from 'styled-components';

import { applyDisplayNames } from '@brix-ui/utils/functions';

import type { OverlayProps } from './overlay.props';

const Overlay = styled.div<Pick<OverlayProps, 'transitionSpeed'>>(
  ({ transitionSpeed }) => css`
    --opacity: 0.5;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: 900;

    opacity: 0;
    cursor: default;

    &[aria-expanded='true'] {
      opacity: var(--opacity);
    }

    &[data-should-close] {
      cursor: pointer;
    }

    transition: all ${transitionSpeed !== undefined ? `${transitionSpeed}ms` : 'var(--transition-short)'};
  `
);

const Styled = applyDisplayNames({ Overlay });

export default Styled;
