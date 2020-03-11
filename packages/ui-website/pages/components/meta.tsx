import React from 'react';

import { Meta } from '@ustudio/ui';

import { ComponentInfo, ComponentInfoItem } from '../../components';

const MetaPage = () => {
  return (
    <ComponentInfo
      name="Meta"
      description="Meta component is used to represent key-value pairs of data."
      props={{
        value: {
          type: '`string`',
          required: true,
        },
        variant: {
          type: `\`'small' | 'large'\``,
          defaultValue: `\`'small'\``,
        },
        title: {
          type: '`string`',
        },
        href: {
          type: '`string`',
          description: 'Provide this to make value a link',
        },
      }}
      classNames={['Meta', 'Title']}
    >
      <ComponentInfoItem>
        <Meta value="John" title="First Name" />

        <Meta value="Doe" title="Last Name" />
      </ComponentInfoItem>

      <ComponentInfoItem>
        <Meta value="John" variant="large" />

        <Meta value="Doe" variant="large" title="Last Name" />

        <Meta
          value="Personal web page"
          href="https://en.wikipedia.org/wiki/John_Doe"
          variant="large"
          title="Web-site"
        />
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default MetaPage;
