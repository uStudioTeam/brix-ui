import PropTypes from 'prop-types';

export function inputProps(valueType) {
  return {
    label: PropTypes.string,
    value: valueType,
    defaultValue: valueType,
    onChange: PropTypes.func,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
  };
}
