import React from 'react';

import { Badge } from 'ustudio-ui';

import { ComponentInfo, ComponentInfoItem } from '../../components';

const BadgePage = () => {
  return (
    <ComponentInfo
      name="Badge"
      description="Badge represents a small piece of information of different types."
      props={{
        children: {
          type: '`string | number`',
          required: true,
        },
        appearance: {
          type: `
          {
            background?: string;
            color?: string;
          }`,
          defaultValue: `
          {
            background: 'var(--g-primary)',
            color: 'var(--c-lightest)'
          }`
        },
        isDisabled: {
          type: '`boolean`',
          defaultValue: '`false`',
        },
      }}
      classNames={['Badge', 'Content']}
    >
      <ComponentInfoItem>
        <Badge appearance={{ background: 'var(--c-primary)', color: 'var(--c-lightest)' }}>Badge</Badge>
        <Badge isDisabled>54</Badge>
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default BadgePage;
