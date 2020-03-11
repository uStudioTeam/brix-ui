import React from 'react';

import { TextArea } from '@ustudio/ui';

import { ComponentInfo, ComponentInfoItem, inputProps } from '../../components';
import { controlledInputDescription } from '../../utils';

const TextAreaPage = () => {
  const [values, setValues] = React.useState({ default: '', row: '', column: '' });
  return (
    <ComponentInfo
      name="TextArea"
      description={`${controlledInputDescription('Text area')}.`}
      props={inputProps('string')}
      classNames={['InputContainer', 'Input']}
    >
      <ComponentInfoItem>
        <TextArea
          label="Text area"
          onChange={(val: string) => setValues({ ...values, default: val })}
          value={values.default}
          placeholder="Placeholder"
          isRequired
        />
        <TextArea label="Disabled" placeholder="Placeholder" isDisabled />
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default TextAreaPage;
