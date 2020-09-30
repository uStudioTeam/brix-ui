import React from 'react';

import { intrinsicComponent } from '@brix-ui/utils/functions';
import { disclosable, stylableComponent } from '@brix-ui/prop-types/common';
import { useModal } from '@brix-ui/contexts/modal';

import Portal from '../portal';

import type { OverlayProps } from './overlay.props';
import Styled from './overlay.styles';

const Overlay = intrinsicComponent<OverlayProps, HTMLDivElement>(function Overlay(
  { isOpen, onOpen, onChange, onClose, onClick, ...props },
  ref
) {
  const { shouldBeOpen, shouldMount, toggle } = useModal({ isOpen, onOpen, onChange, onClose, unmountOnExit: true });

  return shouldMount ? (
    <Portal>
      <Styled.Overlay
        ref={ref}
        role="button"
        isOpen={shouldBeOpen}
        onClose={onClose}
        onClick={() => toggle(false)}
        {...props}
      />
    </Portal>
  ) : null;
});

Overlay.propTypes = {
  ...disclosable,
  ...stylableComponent(),
};

export default Overlay;
