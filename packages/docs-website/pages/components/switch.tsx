import React from 'react';

import { Switch } from 'ustudio-ui';

import { ComponentInfo, ComponentInfoItem, inputProps } from '../../components';
import { controlledInputDescription } from '../../utils';

const SwitchPage = () => {
  const [defaultCheckboxValue, setDefaultCheckboxValue] = React.useState(false);
  const [alternativeCheckboxValue, setAlternativeCheckboxValue] = React.useState(false);

  return (
    <ComponentInfo
      name="Switch"
      description={`
Allows turning an option on or off.

${controlledInputDescription('Switch')}.`}
      props={{
        ...inputProps('boolean'),
        alternative: {
          type: '`true`',
        },
      }}
      classNames={['SwitchContainer', 'Input', 'Switch']}
    >
      <ComponentInfoItem>
        <Switch
          name="default"
          value={defaultCheckboxValue}
          isRequired
          onChange={() => setDefaultCheckboxValue(!defaultCheckboxValue)}
        />

        <Switch name="disabled" value={defaultCheckboxValue} isDisabled />
      </ComponentInfoItem>

      <ComponentInfoItem
        title="Alternative switch"
        description="Creates an alternative variant with a more rectangular look."
      >
        <Switch
          name="alternative"
          value={alternativeCheckboxValue}
          isRequired
          alternative
          onChange={() => setAlternativeCheckboxValue(!alternativeCheckboxValue)}
        />

        <Switch name="disabled" value={alternativeCheckboxValue} isDisabled alternative />
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default SwitchPage;
