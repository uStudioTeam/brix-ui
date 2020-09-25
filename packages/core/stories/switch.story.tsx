import React from 'react';
import { Story } from '@storybook/react';

import styled from 'styled-components';
import { useTheme } from '@brix-ui/theme';

import Switch, { SwitchProps } from '../src/switch';
import Text from '../src/text';
import Flex from '../src/flex';

export default {
  title: 'Form/Switch',
  component: Switch,
};

export const Basic: Story<SwitchProps> = (args) => {
  return <Switch {...args} />;
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

export const WithChildren: Story<SwitchProps> = (args) => {
  const { switchMode, mode } = useTheme();

  return (
    <Label>
      <Text lineHeightCompensation>Dark Theme</Text>

      <Switch {...args} value={!mode} onChange={switchMode}>
        {({ value }) => <Emoji aria-label={value ? 'moon' : 'sun'}>{value ? '🌚' : '🌞'}</Emoji>}
      </Switch>
    </Label>
  );
};