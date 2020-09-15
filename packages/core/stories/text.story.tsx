import React from 'react';
import type { Story } from '@storybook/react';

import { Values } from '@ustudio-ui/utils/types';
import { objectValues } from '@ustudio-ui/utils/functions';
import { FontVariant, TextAlign, TextDecoration, TypeVariant } from '@ustudio-ui/types/typography';

import Text, { TextProps } from '../src/text';

export default {
  title: 'Data/Text',
  component: Text,

  argTypes: {
    as: {
      description: 'Semantic element of the component',
    },
    variant: {
      description: 'Style of the corresponding semantic element',
    },
    appearance: {
      control: { type: 'inline-radio', options: objectValues(FontVariant) },
      description: 'Context of text appearance',
      defaultValue: {
        summary: `'${FontVariant.Body}'`,
      },
    },
    align: {
      control: { type: 'inline-radio', options: objectValues(TextAlign) },
    },
    decoration: {
      control: { type: 'inline-radio', options: objectValues(TextDecoration) },
    },
    color: {
      control: 'color',
    },
    lineHeightCompensation: {
      description: "Compensate text's `line-height` by adding a slight negative `margin-top`",
    },
  },

  args: {
    appearance: FontVariant.Body,
    align: TextAlign.Left,
  },
};

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
          <Text key={typeVariant} variant={typeVariant} {...args}>
            {getTypeName(typeVariant)}
          </Text>
        );
      })}
    </>
  );
};
