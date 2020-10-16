import React, { useCallback } from 'react';
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
      control: {
        type: 'inline-radio',
        options: ['valid', 'invalid', 'indeterminate'],
      },
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
