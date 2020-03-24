import React from 'react';

import { Progress } from 'ustudio-ui';

import { ComponentInfo, ComponentInfoItem } from '../../components';

const ProgressPage = () => {
  return (
    <ComponentInfo
      name="Progress"
      description="Represents a progress of some sort."
      props={{
        value: {
          type: '`number`',
          required: true,
        },
        max: {
          type: '`number`',
          required: true,
        },
      }}
      classNames={['Progress']}
    >
      <ComponentInfoItem>
        <Progress max={100} value={60} />
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default ProgressPage;
