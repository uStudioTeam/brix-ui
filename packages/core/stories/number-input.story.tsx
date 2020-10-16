import React, { useCallback } from 'react';
import styled from 'styled-components';
import type { Story } from '@storybook/react';

import { applyDisplayNames } from '@brix-ui/utils/functions';

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
      control: {
        type: 'inline-radio',
        options: ['valid', 'invalid', 'indeterminate'],
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

export const Basic: Story<NumberInputProps> = ({ isInvalid, ...args }) => {
  const validity = useCallback((): typeof isInvalid => {
    switch ((isInvalid as unknown) as 'valid' | 'invalid' | 'indeterminate') {
      case 'invalid':
        return true;
      case 'valid':
        return false;
      case 'indeterminate':
      default:
        return undefined;
    }
  }, [isInvalid]);

  return (
    <Styled.Container>
      <NumberInput isInvalid={validity()} {...args} />
    </Styled.Container>
  );
};
