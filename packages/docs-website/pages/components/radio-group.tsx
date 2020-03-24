import React from 'react';

import { RadioGroup } from 'ustudio-ui';

import { ComponentInfo, ComponentInfoItem, inputProps } from '../../components';
import { controlledInputDescription } from '../../utils';

const RadioGroupPage = () => {
  const options = {
    1: {
      value: 1,
      label: 'One',
    },
    2: {
      value: 2,
      isDisabled: true,
    },
    3: {
      value: '3',
    },
  };
  const [checked, setChecked] = React.useState<{ value: number | string; label?: string; isDisabled?: boolean }>(
    options[1]
  );

  return (
    <ComponentInfo
      name="RadioGroup"
      description={`
RadioGroup allows selecting only one option from a set.

${controlledInputDescription('RadioGroup')}.`}
      props={{
        options: {
          type: `
          {
            [value: string | number]:
              {
                value: string | number;
                label?: string;
                isDisabled?: boolean;
              }
          }`,
          required: true,
        },
        ...inputProps(`Option`),
        direction: {
          type: `\`'row' | 'column'\``,
          defaultValue: '`column`',
        },
        isReversed: {
          type: '`boolean`',
          defaultValue: '`false`',
          description: 'Controls displacement of button labels',
        },
      }}
      classNames={['RadioGroup', 'RadioGroupItem', 'Label', 'Input', 'RadioButton']}
    >
      <ComponentInfoItem>
        <RadioGroup
          options={options}
          value={checked}
          onChange={selected => setChecked(selected)}
          name="options"
          direction="row"
        />
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default RadioGroupPage;
