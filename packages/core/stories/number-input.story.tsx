import React, { useCallback } from 'react';
import styled from 'styled-components';
import type { Meta, Story } from '@storybook/react';

import { applyDisplayNames } from '@brix-ui/utils/functions';

import _NumberInput, { NumberInputProps } from '../src/number-input';

export const NumberInput = _NumberInput;

export default {
  title: 'Form/NumberInput',
  component: NumberInput,
  excludeStories: ['NumberInput'],

  args: {
    placeholder: 'Placeholder',
  },
} as Meta;

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
