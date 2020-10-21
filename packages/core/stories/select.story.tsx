import React, { useCallback } from 'react';
import styled from 'styled-components';
import type { Meta, Story } from '@storybook/react';

import _Select, { SelectProps } from '../src/select';

export const Select = _Select;

const Container = styled.div`
  width: 33%;
`;

export default {
  title: 'Form/Select',
  component: Select,
  excludeStories: ['Select'],

  decorators: [(StoryFn) => <Container>{StoryFn()}</Container>],
} as Meta;

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
