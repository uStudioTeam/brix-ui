import React, { useCallback } from 'react';
import { Story } from '@storybook/react';
import styled from 'styled-components';

import Switch, { SwitchProps } from '../src/switch';
import Flex from '../src/flex';
import Text from '../src/text';

export default {
  title: 'Form/Switch',
  component: Switch,

  argTypes: {
    isDisabled: {
      control: 'boolean',
    },
    isInvalid: {
      control: {
        type: 'inline-radio',
        options: ['valid', 'invalid', 'indeterminate'],
      },
    },
  },
};

export const Basic: Story<SwitchProps> = ({ isInvalid, ...args }) => {
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

  return <Switch isInvalid={validity()} {...args} />;
};

const Emoji = styled(Text).attrs(() => ({
  role: 'img',
}))`
  transform: translateY(5%);

  font-size: 12px;
  line-height: 1;
`;

const Label = styled(Flex).attrs(() => ({
  forwardedAs: 'label',
  gap: { horizontal: '1rem' },
  verticalAlign: 'center',
}))`
  cursor: pointer;
`;

export const WithChildren: Story<SwitchProps> = ({ isInvalid, ...args }) => {
  // eslint-disable-next-line sonarjs/no-identical-functions
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
    <Label>
      <Text lineHeightCompensation>Dark Theme</Text>

      <Switch isInvalid={validity()} {...args}>
        {({ value }) => <Emoji aria-label={value ? 'moon' : 'sun'}>{value ? '🌚' : '🌞'}</Emoji>}
      </Switch>
    </Label>
  );
};
