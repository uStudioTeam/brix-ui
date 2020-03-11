import React from 'react';
import PropTypes from 'prop-types';

import { classNames } from '../../utils';

import { Styled } from './styled';

const Progress = ({ value, max, classNames, className }) => {
  return <Styled.Progress {...{ value, max }} className={`${classNames?.Progress || ''} ${className || ''}`} />;
};

Progress.displayName = 'Progress';

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  ...classNames(Object.keys(Styled)),
};

export default Progress;
