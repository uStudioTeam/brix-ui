import React from 'react';

import { RadioGroup } from '@ustudio/ui';

import { ComponentInfo, ComponentInfoItem, inputProps } from '../../components';
import { controlledInputDescription } from '../../utils';

const RadioGroupPage = () => {
  const options = ['1', '2', '3', '4', '5'];
  const [checked, setChecked] = React.useState(options[0] as string | number);

  return (
    <ComponentInfo
      name="RadioGroup"
      description={`
RadioGroup allows selecting only one option from a set.

${controlledInputDescription('RadioGroup')}.`}
      props={{
        options: { type: '`(string | number)[]`', required: true },
        disabledOptions: { type: '`Option[]`' },
        ...inputProps(`Option`),
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
          disabledOptions={[options[2]]}
          onChange={(selected: React.SetStateAction<string | number>) => setChecked(selected)}
          name="options"
          direction="row"
        />
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default RadioGroupPage;
