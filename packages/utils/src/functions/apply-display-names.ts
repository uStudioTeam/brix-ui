import { StyledComponent } from 'styled-components';

/**
 * If you are using a namespace for your styled components, this can come in handy giving each styled component
 * in this namespace a displayName which gives better debugging experience
 */
export function applyDisplayNames<S extends Record<string, StyledComponent<any, any>>>(styledObject: S): S {
  return Object.keys(styledObject).reduce((newStyledObject, styledComponentName) => {
    const styledComponent = styledObject[styledComponentName];
    styledComponent.displayName = `${styledComponentName}`;

    return Object.assign(newStyledObject, { [styledComponentName]: styledComponent });
  }, {} as S);
}
