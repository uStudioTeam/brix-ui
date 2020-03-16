import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { GridContext } from '../Grid';

import { Styled } from '../styles';

const Cell = ({ children, className, index, ...breakpoints }) => {
  const gridData = useContext(GridContext);

  return (
    <Styled.Cell className={className || ''} index={index} {...gridData} {...breakpoints}>
      {children}
    </Styled.Cell>
  );
};

Cell.displayName = 'Cell';

Cell.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  ...['xs', 'md', 'lg', 'xl'].reduce(
    (templates, breakpoint) =>
      Object.assign(templates, {
        [breakpoint]: PropTypes.exact({
          size: PropTypes.number,
          offset: PropTypes.exact({
            before: PropTypes.number,
            after: PropTypes.number,
          })
        }),
      }),
    {}
  ),
  className: PropTypes.string,
};

export default Cell;
