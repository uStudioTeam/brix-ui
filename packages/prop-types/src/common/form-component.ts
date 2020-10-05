import type { WeakValidationMap } from 'react';
import PT, { Requireable } from 'prop-types';

import type { FormComponent } from '@brix-ui/types/component';

export const formComponent = <E extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, V>(
  value: Requireable<V>
): WeakValidationMap<FormComponent<E, V>> => {
  return ({
    value,
    defaultValue: value,

    isDisabled: PT.bool,
    isReadonly: PT.bool,
    isRequired: PT.bool,
    isInvalid: PT.bool,

    onChange: PT.func,
  } as unknown) as WeakValidationMap<FormComponent<E, V>>;
};
