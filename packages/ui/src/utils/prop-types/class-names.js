import PropTypes from 'prop-types';

export function classNames(classes) {
  return {
    className: PropTypes.string,
    classNames: PropTypes.exact(
      classes.reduce((classesObject, className) => {
        return {
          ...classesObject,
          [className]: PropTypes.string,
        };
      }, {})
    ),
  };
}
