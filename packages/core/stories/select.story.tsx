import React from 'react';
import styled from 'styled-components';
import type { Meta, Story } from '@storybook/react';

import Select, { SelectProps } from '../src/select';

const Container = styled.div`
  width: 33%;
`;

export default {
  title: 'Form/Select',
  component: Select,

  decorators: [(StoryFn) => <Container>{StoryFn()}</Container>],
} as Meta;

const argTypes = {
  placeholder: {
    control: 'text',
  },
  isDisabled: {
    control: 'boolean',
  },
  isInvalid: {
    control: 'boolean',
  },
  disabledOptions: {
    control: 'array',
    description: 'Values of options to be disabled',
  },
};

const defaultArgs = {
  placeholder: 'Select...',
};

const FlatTemplate: Story<SelectProps> = (args) => {
  return <Select {...args} />;
};

export const Flat = FlatTemplate.bind({});

Flat.argTypes = {
  ...argTypes,
  options: {
    control: 'array',
  },
};

Flat.args = {
  ...defaultArgs,
  options: [
    {
      label: 'Ukraine',
      value: 'UA',
    },
    {
      label: 'Moldova',
      value: 'MD',
    },
    {
      label: 'Azerbaijan',
      value: 'AZ',
    },
    {
      label: 'Armenia',
      value: 'AR',
    },
  ],
};

const GroupsTemplate: Story<SelectProps> = (args) => {
  return <Select {...args} />;
};

export const Groups = GroupsTemplate.bind({});

Groups.argTypes = {
  ...argTypes,
  options: {
    control: 'object',
  },
  disabledGroups: {
    control: {
      type: 'inline-check',
      options: [0, 1],
    },
    description: 'Indices of groups to be disabled',
  },
};

Groups.args = {
  ...defaultArgs,
  options: [
    {
      label: 'East Europe',
      options: [
        {
          label: 'Ukraine',
          value: 'UA',
        },
        {
          label: 'Moldova',
          value: 'MD',
        },
      ],
    },
    {
      label: 'South-West Europe',
      options: [
        {
          label: 'Azerbaijan',
          value: 'AZ',
        },
        {
          label: 'Armenia',
          value: 'AR',
        },
      ],
    },
  ],
};
