import React from 'react';

import { select } from '@storybook/addon-knobs';

import { Values } from '@ustudio-ui/utils/types';
import { objectValues } from '@ustudio-ui/utils/functions';
import { FontVariant, TypeVariant } from '@ustudio-ui/theme/typography';

import Text from '@ustudio-ui/core/text';

export default {
  title: 'Data/Text',
};

export const Basic = () => {
  const getTypeName = (typeVariant: Values<typeof TypeVariant>): string => {
    switch (typeVariant) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
        return `Heading ${typeVariant.slice(1)}`;
      case 'p':
        return 'Paragraph';
      case 'small':
      default:
        return 'Small';
    }
  };

  return objectValues(TypeVariant).map((typeVariant) => {
    return (
      <Text
        key={typeVariant}
        variant={typeVariant}
        appearance={select<Values<typeof FontVariant>>('Variant', objectValues(FontVariant), FontVariant.Body)}
      >
        {getTypeName(typeVariant)}
      </Text>
    );
  });
};
