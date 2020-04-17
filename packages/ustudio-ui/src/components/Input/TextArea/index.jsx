import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import useDefaultValue from '../../../hooks/use-default-value';

import { BaseInput, props } from '../BaseInput';

import { Styled } from '../styles';

const TextArea = forwardRef(function TextArea(
  {
    id,
    name,
    value,
    defaultValue,
    onChange,
    isDisabled = false,
    isRequired = false,
    classNames,
    className,
    rows = 3,
    ...htmlAttributes
  },
  ref
) {
  useDefaultValue(onChange, { value, defaultValue });
  
  return (
    <BaseInput
      as="textarea"
      ref={ref}
      id={id}
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={({ target: { value: inputValue } }) => onChange(inputValue)}
      isDisabled={isDisabled}
      isRequired={isRequired}
      classNames={classNames}
      className={className}
      rows={rows}
      {...htmlAttributes}
    />
  );
});

const { Prefix: _p, Suffix: _s, ...StyledTextArea } = Styled;

TextArea.displayName = 'TextArea';

TextArea.propTypes = props.propTypes({ valueType: PropTypes.string, classes: StyledTextArea, slots: false });

TextArea.defaultProps = {
  ...props.defaultProps,
  rows: 3,
};

export default TextArea;
