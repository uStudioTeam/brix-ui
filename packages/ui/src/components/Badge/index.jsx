import React from 'react';
import PropTypes from 'prop-types';

import Text from '../../components/Text';

import { classNames } from '../../utils';

import { Styled } from './styled';

const Badge = ({ children, isDisabled = false, appearance, classNames, className = "" }) => (
  <Styled.Badge
    aria-disabled={isDisabled}
    isDisabled={isDisabled}
    appearance={appearance}
    className={`${classNames?.Badge || ''} ${className}`}
  >
    <Text variant="caption" classNames={{ Text: classNames?.Content || '' }}>{`${children}`}</Text>
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
  ...classNames([...Object.keys(Styled), 'Content']),
};

Badge.defaultProps = {
  isDisabled: false,
};

export default Badge;
