export const StyledComponents = object =>
  Object.keys(object).reduce(
    (injectedObject, componentKey) =>
      Object.assign(injectedObject, {
        [componentKey]: {
          ...object[componentKey],
          displayName: componentKey,
          attrs: [
            props => ({
              className: `${props.classNames?.[displayName] || ''} ${props?.className || ''}`.trim(),
            }),
          ],
        },
      }),
    {}
  );
