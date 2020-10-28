import React from 'react';
import type { Meta, Story } from '@storybook/react';

import { Values } from '@brix-ui/utils/types';
import { objectValues } from '@brix-ui/utils/functions';
import { FontVariant, TextAlign, TypeVariant } from '@brix-ui/types/typography';

import _Text, { TextProps } from '../src/text';

export const Text = _Text;

export default {
  title: 'Data/Text',
  component: Text,
  excludeStories: ['Text'],

  args: {
    appearance: FontVariant.Body,
    align: TextAlign.Left,
  },
} as Meta;

export const Basic: Story<Omit<TextProps, 'variant'>> = (args) => {
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
          <Text as={typeVariant} key={typeVariant} {...args}>
            {getTypeName(typeVariant)}
          </Text>
        );
      })}
    </>
  );
};
