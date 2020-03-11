import React from 'react';
import PropTypes from 'prop-types';

import { classNames, common } from '../../utils';

import { Styled } from './styled';

const Avatar = ({ children, appearance, isDisabled = false, classNames, className }) => (
  <Styled.Avatar
    className={`${classNames?.Avatar || ''} ${className || ''}`}
    aria-labelledby={`${children} avatar`}
    aria-disabled={isDisabled}
    {...{ isDisabled, appearance }}
  >
    {children
      .split(' ', 2)
      .map(word => word.slice(0, 1))
      .join('')
      .toUpperCase()}
  </Styled.Avatar>
);

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  children: PropTypes.string.isRequired,
  appearance: PropTypes.exact({
    background: PropTypes.string,
    color: PropTypes.string,
    size: common.size,
  }),
  isDisabled: PropTypes.bool,
  ...classNames(Object.keys(Styled)),
};

Avatar.defaultProps = {
  isDisabled: false,
};

export default Avatar;
