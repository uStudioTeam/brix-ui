import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Caret } from '../../../assets/icons/caret.svg';
import { ReactComponent as Check } from '../../../assets/icons/check.svg';
import { ReactComponent as Chevron } from '../../../assets/icons/chevron.svg';
import { ReactComponent as Times } from '../../../assets/icons/times.svg';

import { common } from '../../../utils';

import { Styled } from './styled';

function renderIcon(name) {
  return {
    caret: <Caret />,
    check: <Check />,
    chevron: <Chevron />,
    times: <Times />,
  }[name];
}

const Icon = ({ name, angle = 0, size = 'small', className = '' }) => (
  <Styled.Icon {...{ name, angle, size }} className={className}>
    {renderIcon(name)}
  </Styled.Icon>
);

Icon.propTypes = {
  name: PropTypes.oneOf(['caret', 'check', 'chevron', 'times']).isRequired,
  angle: PropTypes.number,
  size: common.size
};

Icon.defaultProps = {
  angle: 0,
  size: 'small',
};

export default Icon;
