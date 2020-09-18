import { StyledComponent } from 'styled-components';

export const applyDisplayNames = <S extends Record<string, StyledComponent<any, any>>>(styledObject: S): S => {
  return Object.keys(styledObject).reduce((newStyledObject, styledComponentName) => {
    const styledComponent = styledObject[styledComponentName];
    styledComponent.displayName = `${styledComponentName}`;

    return Object.assign(newStyledObject, { [styledComponentName]: styledComponent });
  }, {} as S);
};
