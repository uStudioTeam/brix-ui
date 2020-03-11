import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';

import { classNames, common } from '../../utils';

import { Styled } from './styled';

const Tooltip = ({ value, children, position, classNames, className }) => (
  <Styled.TooltipContainer>
    {children}

    <Styled.Tooltip position={position} className={`${classNames?.Tooltip || ''} ${className || ''}`}>
      <Text variant="small" classNames={{ Text: classNames?.Content || '' }}>
        {value}
      </Text>
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
