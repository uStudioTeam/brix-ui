import React from 'react';
import PropTypes from 'prop-types';

import { classNames, common } from '../../utils';

import { Styled } from './styles';

const Tooltip = ({ value, children, position, styled, classNames, className = '' }) => (
  <Styled.TooltipContainer $styled={styled} tabIndex={1}>
    {children}

    <Styled.Tooltip position={position} $classNames={classNames} className={className} $styled={styled}>
      <Styled.Content variant="small" $classNames={classNames} $styled={styled}>
        {value}
      </Styled.Content>
    </Styled.Tooltip>
  </Styled.TooltipContainer>
);

Tooltip.displayName = 'Tooltip';

Tooltip.propTypes = {
  value: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  position: common.position.isRequired,
  ...classNames(Object.keys(Styled)),
};

export default Tooltip;
