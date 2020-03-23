import React from 'react';

import { Dropdown, Text } from '@ustudio/ui';

import { ComponentInfo, ComponentInfoItem } from '../../components';

const DropdownPage = () => {
  return (
    <ComponentInfo
      name="Dropdown"
      description="A panel that collapses and expands. Works with dynamic heights."
      props={{
        children: {
          type: '`ReactNode | ReactNode[]`',
          required: true,
        },
        title: {
          type: '`ReactNode`',
          required: true,
        },
        isDefaultOpen: {
          type: '`boolean`',
          defaultValue: '`false`',
        },
        onChange: {
          type: '`() => void`',
        },
        name: {
          type: '`string`',
        },
        icon: {
          type: '`ReactNode`',
        },
        isDisabled: {
          type: '`boolean`',
          defaultValue: '`false`',
        },
      }}
      classNames={['DropdownContainer', 'Title', 'TitleIcon', 'Dropdown', 'Content']}
    >
      <ComponentInfoItem>
        <Dropdown title="Open me >:D">
          <Text>Boo!</Text>
        </Dropdown>
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default DropdownPage;
