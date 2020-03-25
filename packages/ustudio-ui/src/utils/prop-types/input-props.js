import PropTypes from 'prop-types';

export function inputProps(valueType) {
  return {
    id: PropTypes.string,
    name: PropTypes.string,
    value: valueType,
    defaultValue: valueType,
    onChange: PropTypes.func,
    isDisabled: PropTypes.bool,
    isRequired: PropTypes.bool,
  };
}
