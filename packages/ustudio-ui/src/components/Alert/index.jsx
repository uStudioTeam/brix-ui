import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../internal/Portal';

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
  styled,
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
        $classNames={classNames}
        className={className}
        $styled={styled}
      >
        <Styled.Content variant="caption" $classNames={classNames} $styled={styled}>
          {children}
        </Styled.Content>

        <Styled.Icon name="close" intent={intent} $classNames={classNames} $styled={styled} />
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
  ...classNames(Object.keys(Styled)),
};

Alert.defaultProps = {
  intent: 'primary',
};

export default Alert;
