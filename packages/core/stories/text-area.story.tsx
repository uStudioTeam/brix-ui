import React, { useCallback } from 'react';
import styled from 'styled-components';
import type { Meta, Story } from '@storybook/react';

import { applyDisplayNames } from '@brix-ui/utils/functions';

import _TextArea, { TextAreaProps } from '../src/text-area';

export const TextArea = _TextArea;

export default {
  title: 'Form/TextArea',
  component: TextArea,
  excludeStories: ['TextArea'],

  args: {
    placeholder: 'Placeholder',
  },
} as Meta;

const Container = styled.div`
  width: 33%;
`;

const Styled = applyDisplayNames({ Container });

export const Basic: Story<TextAreaProps> = ({ resize, isInvalid, ...args }) => {
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
      {/* @ts-ignore */}
      <TextArea isInvalid={validity()} resize={resize === 'none' ? undefined : resize} {...args} />
    </Styled.Container>
  );
};
