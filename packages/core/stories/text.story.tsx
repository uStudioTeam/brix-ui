import { Story } from '@storybook/react';
import React from 'react';

import { Values } from '@ustudio-ui/utils/types';
import { objectValues } from '@ustudio-ui/utils/functions';
import { TypeVariant } from '@ustudio-ui/types/typography';

import Text, { TextProps } from '@ustudio-ui/core/text';

export default {
  title: 'Data/Text',
  component: Text,
};

export const Basic: Story<Omit<TextProps, 'variant' | 'css'>> = (args) => {
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

  return (
    <>
      {objectValues(TypeVariant).map((typeVariant) => {
        return (
          <Text key={typeVariant} variant={typeVariant} {...args}>
            {getTypeName(typeVariant)}
          </Text>
        );
      })}
    </>
  );
};
