import React from 'react';
import PT from 'prop-types';

import { Position } from '@brix-ui/types/css';
import { disclosable, stylableComponent, unmountable } from '@brix-ui/prop-types/common';
import { intrinsicComponent, objectValues } from '@brix-ui/utils/functions';
import useDisclose from '@brix-ui/hooks/use-disclose';
import useUnmountOnExit from '@brix-ui/hooks/use-unmount-on-exit';
import { useModal } from '@brix-ui/contexts/modal';

import Portal from '../portal';

import type { DrawerProps } from './drawer.props';
import Styled from './drawer.styles';

const Drawer = intrinsicComponent<DrawerProps, HTMLDivElement>(function Drawer(
  { children, position, unmountOnExit, isOpen, onOpen, onChange, onClose, ...props },
  ref
) {
  const [internalIsOpen] = useDisclose({
    isOpen,
    onOpen,
    onChange,
    onClose,
  });

  const useUnmountOnExitResult = useUnmountOnExit(internalIsOpen, unmountOnExit);

  const { shouldMount, shouldBeOpen } = useModal({
    ...useUnmountOnExitResult,
    unmountOnExit,
  });

  return shouldMount ? (
    <Portal>
      <Styled.Drawer ref={ref} isOpen={shouldBeOpen} $position={position} aria-expanded={shouldBeOpen} {...props}>
        {children}
      </Styled.Drawer>
    </Portal>
  ) : null;
});

Drawer.propTypes = {
  position: PT.oneOf(objectValues(Position)).isRequired,

  ...disclosable,
  ...unmountable,
  ...stylableComponent(),
};

export default Drawer;
