import { css, FlattenSimpleInterpolation } from 'styled-components';

import { StylableComponent } from '@brix-ui/types/component';

export function createCustomProperties<CP extends StylableComponent<string>['customProperties']>(
  customProperties = {} as CP,
  defaultValues: Record<keyof Required<NonNullable<CP>>, string | undefined>
): FlattenSimpleInterpolation {
  return Object.keys(defaultValues).reduce((properties, property) => {
    return css`
      ${properties};
      
      --${property.replace(/(?<=[a-z])[A-Z]/, (character) => `-${character.toLowerCase()}`)}: ${
      customProperties[property] ?? defaultValues[property]
    };
      `;
  }, css``);
}