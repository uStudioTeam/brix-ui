import React from 'react';
import PropTypes from 'prop-types';

import { classNames } from '../../utils';

import { Styled } from './styles';

const Meta = ({ variant = 'small', title, value, classNames, className = '' }) => (
  <Styled.Meta classNames={classNames} className={className}>
    {title && (
      <Styled.Title variant={variant} classNames={classNames}>
        {title}
      </Styled.Title>
    )}
    <Styled.Value variant={variant} className={classNames}>
      {value}
    </Styled.Value>
  </Styled.Meta>
);

Meta.displayName = 'Meta';

Meta.propTypes = {
  variant: PropTypes.oneOf(['small', 'large']),
  title: PropTypes.node,
  value: PropTypes.node.isRequired,
  ...classNames(Object.keys(Styled)),
};

Meta.defaultProps = {
  variant: 'small',
};

export default Meta;
