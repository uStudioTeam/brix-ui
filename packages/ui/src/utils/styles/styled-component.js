export const StyledComponent = (displayName) => Component => {
  Component.displayName = displayName;
  Component.attrs = [
    props => ({
      className: `${props.classNames?.[displayName] || ''} ${props?.className || ''}`.trim(),
    }),
  ];

  return Component;
};
