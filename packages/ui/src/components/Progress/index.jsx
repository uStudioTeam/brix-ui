import React from 'react';
import PropTypes from 'prop-types';

import { classNames } from '../../utils';

import { Styled } from './styles';

const Progress = ({ value, max, classNames, className = '' }) => {
  return <Styled.Progress value={value} max={max} className={className} classNames={classNames} />;
};

Progress.displayName = 'Progress';

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  ...classNames(Object.keys(Styled)),
};

export default Progress;
