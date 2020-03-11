import React from 'react';
import PropTypes from 'prop-types';

import { classNames, common } from '../../utils';

import { Styled } from './styled';

const Placeholder = ({ variant = 'block', appearance, classNames, className }) => (
  <Styled.Placeholder {...{ variant, appearance }} className={`${classNames?.Placeholder || ''} ${className || ''}`} />
);

Placeholder.displayName = 'Placeholder';

Placeholder.propTypes = {
  variant: PropTypes.oneOf(['text', 'block']),
  appearance: PropTypes.exact({
    width: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.string, common.text]),
    borderRadius: PropTypes.string,
  }),
  ...classNames(Object.keys(Styled)),
};

Placeholder.defaultProps = {
  variant: 'block',
};

export default Placeholder;
