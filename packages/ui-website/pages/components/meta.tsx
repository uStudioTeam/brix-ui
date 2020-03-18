import React from 'react';

import { Meta } from '@ustudio/ui';

import { ComponentInfo, ComponentInfoItem } from '../../components';

const MetaPage = () => {
  return (
    <ComponentInfo
      name="Meta"
      description="Meta component is used to represent key-value pairs of data."
      props={{
        children: {
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
        <Meta title="First Name">John</Meta>

        <Meta title="Last Name">Doe</Meta>
      </ComponentInfoItem>

      <ComponentInfoItem>
        <Meta variant="large">John</Meta>

        <Meta variant="large" title="Last Name">
          Doe
        </Meta>

        <Meta variant="large" title="Web-site">
          <a href="https://en.wikipedia.org/wiki/John_Doe">Personal web page</a>
        </Meta>
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default MetaPage;
