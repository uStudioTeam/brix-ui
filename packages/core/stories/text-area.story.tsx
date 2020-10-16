import React from 'react';
import styled from 'styled-components';
import type { Story } from '@storybook/react';

import { applyDisplayNames } from '@brix-ui/utils/functions';

import TextArea, { TextAreaProps } from '../src/text-area';

export default {
  title: 'Form/TextArea',
  component: TextArea,

  argTypes: {
    placeholder: {
      control: 'text',
    },
    isDisabled: {
      control: 'boolean',
    },
    isReadonly: {
      control: 'boolean',
    },
    isInvalid: {
      control: 'boolean',
    },
    showSymbolsLeft: {
      control: 'boolean',
    },
    maxLength: {
      control: 'number',
    },
    resize: {
      control: {
        type: 'inline-radio',
        options: ['both', 'horizontal', 'vertical', 'none'],
      },
    },
  },

  args: {
    placeholder: 'Placeholder',
  },
};

const Container = styled.div`
  width: 33%;
`;

const Styled = applyDisplayNames({ Container });

export const Basic: Story<TextAreaProps> = ({ resize, ...args }) => {
  return (
    <Styled.Container>
      {/* @ts-ignore */}
      <TextArea resize={resize === 'none' ? undefined : resize} {...args} />
    </Styled.Container>
  );
};
