import React from 'react';

import { intrinsicComponent } from '@brix-ui/utils/functions';
import { disclosable, stylableComponent } from '@brix-ui/prop-types/common';
import { useModal } from '@brix-ui/contexts/modal';
import useUnmountOnExit from '@brix-ui/hooks/use-unmount-on-exit';
import useDisclose from '@brix-ui/hooks/use-disclose';

import Portal from '../portal';

import type { OverlayProps } from './overlay.props';
import Styled from './overlay.styles';

const Overlay = intrinsicComponent<OverlayProps, HTMLDivElement>(function Overlay(
  { isOpen, onOpen, onChange, onClose, onClick, ...props },
  ref
) {
  const [internalIsOpen, toggle] = useDisclose({
    isOpen,
    onOpen,
    onChange,
    onClose,
  });

  const useUnmountOnExitResult = useUnmountOnExit(internalIsOpen, true);

  const { shouldMount, shouldBeOpen } = useModal({
    ...useUnmountOnExitResult,
    unmountOnExit: true,
  });

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
