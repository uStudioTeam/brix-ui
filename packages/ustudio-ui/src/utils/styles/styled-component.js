import styled from 'styled-components';

export const StyledComponents = object => {
  return Object.keys(object).reduce((injectedObject, componentKey) => {
    return Object.assign(injectedObject, {
      [componentKey]: styled(object[componentKey]).attrs(props => ({
        className: `${props.classNames?.[componentKey] || ''} ${props?.className || ''}`.trim(),
      }))(props => {
        const style = props.styled?.[componentKey];

        if (style) {
          if (Array.isArray(style)) {
            return style;
          }

          if (typeof style === 'function') {
            return style({
              ...Object.keys(object).reduce(
                (classes, classKey) => Object.assign(classes, { [classKey]: object[classKey] }),
                {}
              ),
              ...props,
            });
          }
        }

        return ``;
      }),
    });
  }, {});
};

/*{
  const className = props.classNames?.[componentKey];
  
  if (Array.isArray(className)) {
    return {
      css: css`
                  ${className}
                `,
    };
  }
  
  return {
    className: `${className || ''} ${props?.className || ''}`.trim(),
  };
}*/
