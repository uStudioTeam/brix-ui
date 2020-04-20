import PropTypes from 'prop-types';
import { common } from './common';

export function indentProps() {
  return PropTypes.exact({
    left: common.indentSize,
    right: common.indentSize,
    top: common.indentSize,
    bottom: common.indentSize,
  });
}
