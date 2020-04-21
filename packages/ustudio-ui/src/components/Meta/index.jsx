import React from 'react';
import PropTypes from 'prop-types';

import { classNames } from '../../utils';

import { Styled } from './styles';

const Meta = ({ variant = 'small', title, children: value, styled, classNames, className = '' }) => (
  <Styled.Meta classNames={classNames} className={className} styled={styled}>
    {title && (
      <Styled.Title variant={variant} classNames={classNames} styled={styled}>
        {title}
      </Styled.Title>
    )}

    <Styled.Value variant={variant} classNames={classNames} styled={styled}>
      {value}
    </Styled.Value>
  </Styled.Meta>
);

Meta.displayName = 'Meta';

Meta.propTypes = {
  variant: PropTypes.oneOf(['small', 'large']),
  title: PropTypes.node,
  children: PropTypes.node.isRequired,
  ...classNames(Object.keys(Styled)),
};

Meta.defaultProps = {
  variant: 'small',
};

export default Meta;
