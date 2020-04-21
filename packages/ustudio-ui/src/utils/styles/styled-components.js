import styled from 'styled-components';

export const StyledComponents = components => {
  return Object.keys(components).reduce((injectedObject, componentKey) => {
    return Object.assign(injectedObject, {
      [componentKey]: styled(components[componentKey]).attrs(props => {
        return {
          className: `${props['$classNames']?.[componentKey] || ''}`.trim(),
        };
      })(props => {
        const style = props['$styled']?.[componentKey];

        if (style) {
          if (Array.isArray(style)) {
            return style;
          }

          if (typeof style === 'function') {
            return style({
              ...components,
              ...props,
            });
          }
          
          return ``;
        }

        return ``;
      }),
    });
  }, {});
};
