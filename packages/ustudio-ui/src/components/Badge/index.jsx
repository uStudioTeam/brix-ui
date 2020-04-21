import React from 'react';
import PropTypes from 'prop-types';

import { classNames } from '../../utils';

import { Styled } from './styles';

const Badge = ({ children, isDisabled = false, appearance, styled, classNames, className = '' }) => (
  <Styled.Badge
    aria-disabled={isDisabled}
    isDisabled={isDisabled}
    appearance={appearance}
    styled={styled}
    classNames={classNames}
    className={className}
  >
    <Styled.Content variant="caption" classNames={classNames} styled={styled}>{`${children}`}</Styled.Content>
  </Styled.Badge>
);

Badge.displayName = 'Badge';

Badge.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isDisabled: PropTypes.bool,
  appearance: PropTypes.exact({
    background: PropTypes.string,
    color: PropTypes.string,
  }),
  ...classNames(Object.keys(Styled)),
};

Badge.defaultProps = {
  isDisabled: false,
};

export default Badge;
