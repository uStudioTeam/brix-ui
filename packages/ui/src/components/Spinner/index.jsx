import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { classNames, timeout } from '../../utils';

import { Styled } from './styled';

const Spinner = ({ appearance, delay, classNames, className }) => {
  const [isMounted, setMounted] = useState(!!delay || true);

  useEffect(() => {
    if (delay ?? delay > 0) {
      setMounted(false);
      timeout(delay, () => setMounted(true));
    }
  }, [delay]);

  return isMounted ? (
    <Styled.Spinner
      x="0px"
      y="0px"
      viewBox="0 0 160 160"
      appearance={appearance}
      className={`${classNames?.Spinner || ''} ${className || ''}`}
    >
      <circle r={60} cx={80} cy={80} />
    </Styled.Spinner>
  ) : null;
};

Spinner.displayName = 'Spinner';

Spinner.propTypes = {
  appearance: PropTypes.exact({
    color: PropTypes.string,
    size: PropTypes.number,
  }),
  delay: PropTypes.number,
  ...classNames(Object.keys(Styled)),
};

export default Spinner;
