import { css, FlattenSimpleInterpolation } from 'styled-components';

import type { StylableComponent } from '@brix-ui/types/component';

/**
 * Creates CSS custom properties from the provided object and their default values
 */
export function createCustomProperties<CP extends StylableComponent<string>['customProperties']>(
  customProperties = {} as CP,
  defaultValues: Record<keyof Required<NonNullable<CP>>, string | undefined>
): FlattenSimpleInterpolation {
  return Object.keys(defaultValues).reduce((properties, property) => {
    return css`
      ${properties};
      
      --${property.replace(/([A-Z])/g, (character) => `-${character.toLowerCase()}`)}: ${
      customProperties[property] ?? defaultValues[property]
    };
      `;
  }, css``);
}
