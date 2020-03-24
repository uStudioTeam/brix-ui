import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../internal/Portal';
import Text from '../Text';

import { useKeyPressClose } from '../../hooks';
import { classNames, common } from '../../utils';

import { Styled } from './styles';

const Alert = ({
  children,
  isOpen,
  onChange,
  intent = 'primary',
  verticalPosition,
  horizontalPosition,
  classNames,
  className = '',
}) => {
  useKeyPressClose(onChange);

  return (
    <Portal>
      <Styled.Alert
        type="button"
        onClick={onChange}
        isOpen={isOpen}
        intent={intent}
        verticalPosition={verticalPosition}
        horizontalPosition={horizontalPosition}
        classNames={classNames}
        className={className}
      >
        <Text variant="caption" classNames={{ Text: classNames?.Content }}>
          {children}
        </Text>

        <Styled.Icon name="times" intent={intent} classNames={classNames} />
      </Styled.Alert>
    </Portal>
  );
};

Alert.displayName = 'Alert';

Alert.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  intent: common.intent,
  verticalPosition: PropTypes.oneOf(['top', 'bottom']).isRequired,
  horizontalPosition: PropTypes.oneOf(['left', 'center', 'right']).isRequired,
  ...classNames([...Object.keys(Styled), 'Content']),
};

Alert.defaultProps = {
  intent: 'primary',
};

export default Alert;
