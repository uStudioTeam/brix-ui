import React, { useCallback } from 'react';
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
    control: {
      type: 'inline-radio',
      options: ['valid', 'invalid', 'indeterminate'],
    },
  },
  disabledOptions: {
    control: 'array',
    description: 'Values of options to be disabled',
  },
};

const defaultArgs = {
  placeholder: 'Select...',
};

const FlatTemplate: Story<SelectProps> = ({ isInvalid, ...args }) => {
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

  return <Select isInvalid={validity()} {...args} />;
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

// eslint-disable-next-line sonarjs/no-identical-functions
const GroupsTemplate: Story<SelectProps> = ({ isInvalid, ...args }) => {
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

  return <Select isInvalid={validity()} {...args} />;
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
