import React from 'react';
import type { Meta, Story } from '@storybook/react';

import Text from '../src/text';
import _Disclosure, { DisclosureProps } from '../src/disclosure';

export const Disclosure = _Disclosure;

export default {
  title: 'Widgets/Disclosure',
  component: Disclosure,
  excludeStories: ['Disclosure'],
  args: {
    summary: 'Disclosure summary',
    isDisabled: false,
  },
} as Meta;

export const Basic: Story<DisclosureProps> = ({ summary, ...args }) => {
  return (
    <Disclosure {...args} summary={<Text lineHeightCompensation>{summary}</Text>}>
      Disclosed!
    </Disclosure>
  );
};
