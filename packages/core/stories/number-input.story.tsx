import React from 'react';
import styled from 'styled-components';
import type { Story } from '@storybook/react';

import NumberInput, { NumberInputProps } from '../src/number-input';

export default {
  title: 'Form/NumberInput',
  component: NumberInput,

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

export const Basic: Story<NumberInputProps> = (args) => {
  return (
    <Container>
      <NumberInput {...args} />
    </Container>
  );
};
