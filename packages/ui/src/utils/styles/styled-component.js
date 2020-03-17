export const StyledComponents = object => {
  return Object.keys(object).reduce((injectedObject, componentKey) => {
    return Object.assign(injectedObject, {
      [componentKey]: {
        ...object[componentKey],
        displayName: componentKey,
        attrs: [
          props => ({
            className: `${props.classNames?.[componentKey] || ''} ${props?.className || ''}`.trim(),
          }),
        ],
      },
    });
  }, {});
};
