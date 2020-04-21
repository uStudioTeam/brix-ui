import React from 'react';
import PropTypes from 'prop-types';

import { classNames } from '../../utils';

import { Styled } from './styles';

const Tag = ({
  children: tag,
  appearance = { background: 'var(--g-primary)', color: 'inherit' },
  styled,
  classNames,
  className = '',
}) => {
  return (
    <Styled.Tag appearance={appearance} classNames={classNames} className={className} styled={styled}>
      {tag}
    </Styled.Tag>
  );
};

Tag.displayName = 'Tag';

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  appearance: PropTypes.exact({
    background: PropTypes.string,
    color: PropTypes.string,
  }),
  ...classNames(Object.keys(Styled)),
};

Tag.defaultProps = {
  appearance: {
    background: 'var(--g-primary)',
    color: 'inherit',
  },
};

export default Tag;
