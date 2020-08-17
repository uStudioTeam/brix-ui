import React from 'react';

import Button from '@ustudio-ui/core/button';

export default {
  title: 'Data/Button',
  component: Button,

  argTypes: {
    intent: { control: 'text' },
    appearance: { control: 'text' },
    isDisabled: {
      control: 'boolean',
      description: 'Disables button',
      type: 'function',
    },
  },
};

export const Contained = () => {
  return (
    <>
      <Button intent="accent" appearance="contained">
        Click
      </Button>
      <Button intent="base" appearance="contained">
        Click
      </Button>
      <Button intent="critical" appearance="contained">
        Click
      </Button>
      <Button intent="success" appearance="contained">
        Click
      </Button>
    </>
  );
};

export const Outlined = () => {
  return (
    <>
      <Button intent="accent" appearance="outlined">
        Click
      </Button>
      <Button intent="base" appearance="outlined">
        Click
      </Button>
      <Button intent="critical" appearance="outlined">
        Click
      </Button>
      <Button intent="success" appearance="outlined">
        Click
      </Button>
    </>
  );
};

export const Text = () => {
  return (
    <>
      <Button intent="accent" appearance="text">
        Click
      </Button>
      <Button intent="base" appearance="text">
        Click
      </Button>
      <Button intent="critical" appearance="text">
        Click
      </Button>
      <Button intent="success" appearance="text">
        Click
      </Button>
    </>
  );
};

export const Faint = () => {
  return (
    <>
      <Button intent="accent" appearance="faint">
        Click
      </Button>
      <Button intent="base" appearance="faint">
        Click
      </Button>
      <Button intent="critical" appearance="faint">
        Click
      </Button>
      <Button intent="success" appearance="faint">
        Click
      </Button>
    </>
  );
};
