import React from 'react';
import PropTypes from 'prop-types';

import { classNames } from '../../utils';

import { Styled } from './styled';

const Tag = ({
  children: tag,
  appearance = { background: 'var(--g-primary)', color: 'inherit' },
  classNames,
  className = '',
}) => {
  return (
    <Styled.Tag appearance={appearance} classNames={classNames} className={className}>
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
