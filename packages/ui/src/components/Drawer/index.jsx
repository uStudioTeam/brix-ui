import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../internal/Portal';

import { useKeyPressClose } from '../../hooks';
import { classNames } from '../../utils';

import { Styled } from './styles';

const Drawer = ({
  children,
  isOpen,
  onChange,
  position = 'right',
  showOverlay = false,
  classNames,
  className = '',
}) => {
  useKeyPressClose(onChange);

  return (
    <Portal>
      <Styled.Drawer isOpen={isOpen} position={position} classNames={classNames} className={className}>
        {children}
      </Styled.Drawer>

      {showOverlay && isOpen && <Styled.Overlay onClick={() => onChange(false)} classNames={classNames} />}
    </Portal>
  );
};

Drawer.displayName = 'Drawer';

Drawer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  showOverlay: PropTypes.bool,
  ...classNames(Object.keys(Styled)),
};

Drawer.defaultProps = {
  position: 'right',
  showOverlay: false,
};

export default Drawer;
