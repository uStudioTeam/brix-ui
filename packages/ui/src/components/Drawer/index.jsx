import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../internal/Portal';

import { useKeyPressClose } from '../../hooks';
import { classNames } from '../../utils';

import { Styled } from './styled';

const Drawer = ({ isOpen, onChange, position = 'right', showOverlay = false, children, classNames, className }) => {
  useKeyPressClose(onChange);

  return (
    <Portal>
      <Styled.Drawer
        {...{ isOpen, position }}
        classNames={{ Flex: classNames?.Drawer || '' }}
        className={className || ''}
      >
        {children}
      </Styled.Drawer>

      {showOverlay && isOpen && (
        <Styled.Overlay onClick={() => onChange(false)} className={classNames?.Overlay || ''} />
      )}
    </Portal>
  );
};

Drawer.displayName = 'Drawer';

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  showOverlay: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  ...classNames(Object.keys(Styled)),
};

Drawer.defaultProps = {
  position: 'right',
  showOverlay: false,
};

export default Drawer;
