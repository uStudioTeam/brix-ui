import React, { useCallback } from 'react';
import styled from 'styled-components';
import type { Meta, Story } from '@storybook/react';

import { applyDisplayNames } from '@brix-ui/utils/functions';

import _TextInput, { TextInputProps } from '../src/text-input';

export const TextInput = _TextInput;

export default {
  title: 'Form/TextInput',
  component: TextInput,
  excludeStories: ['TextInput'],

  args: {
    placeholder: 'Placeholder',
  },
} as Meta;

const Container = styled.div`
  width: 33%;
`;

const Styled = applyDisplayNames({ Container });

export const Basic: Story<TextInputProps> = ({ isInvalid, ...args }) => {
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
      <TextInput isInvalid={validity()} {...args} />
    </Styled.Container>
  );
};
