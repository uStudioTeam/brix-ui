import React from 'react';

import { Button } from 'ustudio-ui';

import { ComponentInfo, ComponentInfoItem } from '../../components';

const ButtonPage = () => {
  return (
    <ComponentInfo
      name="Button"
      description="Represents the HTML `<button>` element."
      props={{
        children: {
          type: '`ReactNode`',
          required: true,
        },
        intent: {
          type: `\`'primary' | 'positive' | 'negative'\``,
          defaultValue: `\`'primary'\``,
        },
        appearance: {
          type: `\`'text' | 'contained' | 'outlined'\``,
          defaultValue: `\`'contained'\``,
        },
        isDisabled: {
          type: '`boolean`',
          defaultValue: '`false`',
        },
        isLoading: {
          type: '`boolean`',
          defaultValue: '`false`',
        },
        iconBefore: {
          type: '`ReactNode`',
        },
        iconAfter: {
          type: '`ReactNode`',
        },
      }}
      classNames={['Button', 'LoadingSpinner']}
    >
      <ComponentInfoItem title="Contained buttons" description="Button with background is a default.">
        <Button>Default</Button>
        <Button intent="positive">Positive</Button>
        <Button intent="negative">Negative</Button>
        <Button isDisabled>Disabled</Button>
        <Button isLoading>Loading</Button>
      </ComponentInfoItem>

      <ComponentInfoItem title="Outlined buttons">
        <Button appearance="outlined">Default</Button>
        <Button appearance="outlined" intent="positive">
          Positive
        </Button>
        <Button appearance="outlined" intent="negative">
          Negative
        </Button>
        <Button appearance="outlined" isDisabled>
          Disabled
        </Button>
        <Button appearance="outlined" isLoading>
          Loading
        </Button>
      </ComponentInfoItem>

      <ComponentInfoItem title="Text buttons">
        <Button appearance="text">Default</Button>
        <Button appearance="text" intent="positive">
          Positive
        </Button>
        <Button appearance="text" intent="negative">
          Negative
        </Button>
        <Button appearance="text" isDisabled>
          Disabled
        </Button>
        <Button appearance="text" isLoading>
          Loading
        </Button>
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default ButtonPage;
