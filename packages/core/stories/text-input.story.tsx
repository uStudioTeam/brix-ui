import React from 'react';
import styled from 'styled-components';
import type { Story } from '@storybook/react';

import TextInput, { TextInputProps } from '../src/text-input';

export default {
  title: 'Form/TextInput',
  component: TextInput,

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
  },

  args: {
    placeholder: 'Placeholder',
  },
};

const Container = styled.div`
  width: 33%;
`;

export const Basic: Story<TextInputProps> = (args) => {
  return (
    <Container>
      <TextInput {...args} />
    </Container>
  );
};
