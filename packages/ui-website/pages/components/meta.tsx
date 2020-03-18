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
          type: '`ReactNode`',
          required: true,
        },
        variant: {
          type: `\`'small' | 'large'\``,
          defaultValue: `\`'small'\``,
        },
        title: {
          type: '`ReactNode`',
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
          value={<a href="https://en.wikipedia.org/wiki/John_Doe">Personal web page</a>}
          variant="large"
          title="Web-site"
        />
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default MetaPage;
