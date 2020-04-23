import styled, { css } from 'styled-components';

const getStylesFromComponent = (props, styles) => {
  if (typeof styles === 'function') {
    return styles(props);
  }

  return styles;
};

const getStylesFromProps = (props, componentName) => {
  const styles = props.$styled?.[componentName];

  if (styles) {
    return getStylesFromComponent(props, styles);
  }

  return ``;
};

const getAttrs = displayName => props => ({
  className: `${props['$classNames']?.[displayName] || ''}`,
});

const getStyles = (styles, displayName) => props => css`
  ${getStylesFromComponent(props, styles)};

  ${getStylesFromProps(props, displayName)};
`;

export const sc = component => styles => displayName => {
  return styled(component)
    .withConfig({ displayName })
    .attrs(getAttrs(displayName))(getStyles(styles, displayName));
};
