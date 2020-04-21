import PropTypes from 'prop-types';

const reduceClasses = (classes, type) => {
  return PropTypes.exact(
    classes.reduce((classesObject, className) => {
      return {
        ...classesObject,
        [className]: type,
      };
    }, {})
  );
};

export function classNames(classes) {
  return {
    className: PropTypes.string,
    classNames: reduceClasses(classes, PropTypes.string),
    styled: reduceClasses(classes, PropTypes.oneOfType([PropTypes.func, PropTypes.array])),
  };
}
