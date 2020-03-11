import React from 'react';

import { NumberInput } from '@ustudio/ui';

import styled from 'styled-components';
import { ComponentInfo, ComponentInfoItem, inputProps } from '../../components';
import { controlledInputDescription } from '../../utils';
import { ReactComponent as CodeIcon } from '../../public/assets/icons/code.svg';

const Styled = {
  CodeIcon: styled(CodeIcon)`
    display: inline-block;
    width: 12px;
    height: 12px;
  `,
};

Styled.CodeIcon.displayName = 'Icon';

const NumberInputPage = () => {
  interface Values {
    default?: number;
    prefix?: number;
    suffix?: number;
  }

  const [values, setValues] = React.useState({} as Values);
  return (
    <ComponentInfo
      name="NumberInput"
      description={`${controlledInputDescription('Number input')}.`}
      props={{
        ...inputProps('number'),
        prefix: {
          type: '`ReactNode`',
        },
        suffix: { type: '`ReactNode`' },
      }}
      classNames={['InputContainer', 'Input', 'Prefix', 'Suffix']}
    >
      <ComponentInfoItem>
        <NumberInput
          label="Number input"
          onChange={(val: number) => setValues({ ...values, default: val })}
          value={values.default}
          placeholder="Placeholder"
          isRequired
        />
        <NumberInput label="Disabled number input" placeholder="Placeholder" isDisabled />
      </ComponentInfoItem>

      <ComponentInfoItem title="Prefix and suffix" description="Inputs can even have prefix and suffix!">
        <NumberInput
          label="With prefix"
          onChange={(val: number) => setValues({ ...values, prefix: val })}
          value={values.prefix}
          placeholder="Placeholder"
          prefix={<Styled.CodeIcon />}
        />
        <NumberInput
          label="With suffix"
          onChange={(val: number) => setValues({ ...values, suffix: val })}
          value={values.suffix}
          placeholder="Placeholder"
          suffix={<Styled.CodeIcon />}
        />
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default NumberInputPage;
