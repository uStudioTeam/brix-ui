import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';

import { classNames } from '../../utils';

import { Styled } from './styles';

function renderValue(metaProps) {
  const { href, ...props } = metaProps;
  const { variant, value, classNames } = props;

  return href ? (
    <Styled.Link href={href} className={classNames?.Link || ''}>
      {renderValue(props)}
    </Styled.Link>
  ) : (
    <Text variant={variant === 'small' ? 'body' : 'h4'}>{value}</Text>
  );
}

const Meta = ({ variant = 'small', title, value, href, classNames, className = '' }) => (
  <Styled.Meta classNames={classNames} className={className}>
    {title && (
      <Styled.Title variant={variant === 'small' ? 'caption' : 'h6'} classNames={classNames?.Title || ''}>
        {title}
      </Styled.Title>
    )}
    {renderValue({ variant, value, href, classNames })}
  </Styled.Meta>
);

Meta.displayName = 'Meta';

Meta.propTypes = {
  variant: PropTypes.oneOf(['small', 'large']),
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  href: PropTypes.string,
  ...classNames(Object.keys(Styled)),
};

Meta.defaultProps = {
  variant: 'small',
};

export default Meta;
