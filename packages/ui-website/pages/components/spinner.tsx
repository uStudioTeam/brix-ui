import React from 'react';

import { Spinner } from '@ustudio/ui';

import { ComponentInfo, ComponentInfoItem } from '../../components';

const SpinnerPage = () => {
  return (
    <ComponentInfo
      name="Spinner"
      description="Simple round loading indicator."
      props={{
        appearance: {
          type: `\`
  {
    color?: string;
    size?: number;
  }\``,
          defaultValue: `\`
  {
    color: 'var(--c-primary)';
    size: 32;
  }\``,
        },
        delay: {
          type: '`number`',
          description: `Lets delay Spinner's appearance to prevent unwanted flicker`,
        },
      }}
      classNames={['Spinner']}
    >
      <ComponentInfoItem>
        <Spinner />
      </ComponentInfoItem>

      <ComponentInfoItem title="Size">
        <Spinner appearance={{ size: 10 }} />
        <Spinner appearance={{ size: 30 }} />
        <Spinner appearance={{ size: 40 }} />
        <Spinner appearance={{ size: 50 }} />
      </ComponentInfoItem>

      <ComponentInfoItem title="Color">
        <Spinner appearance={{ color: 'var(--c-positive)' }} />
        <Spinner appearance={{ color: 'var(--c-negative)' }} />
        <Spinner appearance={{ color: 'var(--c-light)' }} />
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default SpinnerPage;
