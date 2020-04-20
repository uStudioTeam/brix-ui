import PropTypes from 'prop-types';

export const common = {
  intent: PropTypes.oneOf(['primary', 'positive', 'negative']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  alignment: PropTypes.exact({
    vertical: PropTypes.oneOf(['start', 'end', 'center', 'stretch', 'space-between', 'space-around']),
    horizontal: PropTypes.oneOf(['start', 'end', 'center', 'stretch', 'space-between', 'space-around']),
  }),
  direction: PropTypes.oneOf(['row', 'column']),
  text: PropTypes.oneOf(['span', 'code', 'small', 'body', 'article', 'caption', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1']),
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  wrapperTag: PropTypes.oneOf(['div', 'header', 'footer', 'main', 'aside', 'section', 'nav']),
};
