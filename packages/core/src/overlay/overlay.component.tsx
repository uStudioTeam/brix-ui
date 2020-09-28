import React from 'react';

import { intrinsicComponent } from '@brix-ui/utils/functions';
import useUpdatedState from '@brix-ui/hooks/use-updated-state';
import useUnmountOnExit from '@brix-ui/hooks/use-unmount-on-exit';

import Portal from '../portal';

import type { OverlayProps } from './overlay.props';
import Styled from './overlay.styles';

const Overlay = intrinsicComponent<OverlayProps, HTMLDivElement>(function Overlay(
  { isActive, onClose, onClick, ...props },
  ref
) {
  const [internalIsActive, setActive] = useUpdatedState(isActive);

  const [shouldBeActive, shouldMount] = useUnmountOnExit(internalIsActive, true);

  return shouldMount ? (
    <Portal>
      <Styled.Overlay
        ref={ref}
        role="button"
        isActive={shouldBeActive}
        onClose={onClose}
        onClick={() => {
          if (onClose) {
            setActive(false);
            onClose();
          }
        }}
        {...props}
      />
    </Portal>
  ) : null;
});

export default Overlay;
