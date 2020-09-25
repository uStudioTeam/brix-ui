import React from 'react';
import PT from 'prop-types';

import { Position } from '@brix-ui/types/css';
import { disclosable, stylableComponent } from '@brix-ui/prop-types/common';
import { intrinsicComponent, objectValues } from '@brix-ui/utils/functions';

import { useDisclose, useUnmountOnExit } from '../_internal/hooks';
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

  const [shouldBeOpen, shouldMount] = useUnmountOnExit(internalIsOpen, unmountOnExit);

  return shouldMount ? (
    <Portal>
      <Styled.Drawer ref={ref} isOpen={shouldBeOpen} $position={position} aria-expanded={shouldBeOpen} {...props}>
        {children}
      </Styled.Drawer>
    </Portal>
  ) : null;
});

Drawer.propTypes = {
  ...disclosable,
  isOpen: PT.bool.isRequired,
  position: PT.oneOf(objectValues(Position)).isRequired,

  unmountOnExit: PT.bool,

  ...stylableComponent(),
};

export default Drawer;
