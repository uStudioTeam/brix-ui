import React from 'react';

import { Tag } from '@ustudio/ui';

import { ComponentInfo, ComponentInfoItem } from '../../components';

const TagPage = () => {
  return (
    <ComponentInfo
      name="Tag"
      props={{
        children: {
          type: '`string`',
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
            background: 'var(--g-primary)';
            color: 'var(--c-lightest)';
          }`,
        },
      }}
      classNames={['Tag']}
    >
      <ComponentInfoItem>
        <Tag appearance={{ color: 'var(--c-lightest)' }}>Default</Tag>
        <Tag appearance={{ background: 'var(--c-positive)', color: 'var(--c-lightest)' }}>Positive</Tag>
        <Tag appearance={{ background: 'var(--c-negative)', color: 'var(--c-lightest)' }}>Negative</Tag>
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default TagPage;
