import PT from 'prop-types';
import type { WeakValidationMap } from 'react';

import type { Disclosable } from '@brix-ui/types/component';

export const disclosable: WeakValidationMap<Disclosable> = {
  isOpen: PT.bool,
  onOpen: PT.func,
  onChange: PT.func,
  onClose: PT.func,
};
