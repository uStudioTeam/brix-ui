import React from 'react';

import { TextInput } from '@ustudio/ui';

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
  InputsContainer: styled.div`
    flex: 1;

    display: grid;
    grid-auto-flow: column;
    grid-gap: var(--i-large);
  `,
};

Styled.CodeIcon.displayName = 'Icon';
Styled.InputsContainer.displayName = 'Container';

const TextInputPage = () => {
  const [values, setValues] = React.useState({ default: '', row: '', column: '', prefix: '', suffix: '' });

  return (
    <ComponentInfo
      name="TextInput"
      description={`${controlledInputDescription('Text input')}.`}
      props={{
        ...inputProps('string'),
        prefix: {
          type: '`ReactNode`',
        },
        suffix: { type: '`ReactNode`' },
      }}
      classNames={['InputContainer', 'Input', 'Prefix', 'Suffix']}
    >
      <ComponentInfoItem>
        <Styled.InputsContainer>
          <TextInput
            name="text-input"
            onChange={(val: string) => setValues({ ...values, default: val })}
            value={values.default}
            placeholder="Placeholder"
            isRequired
          />

          <TextInput name="disabled" placeholder="Disabled" isDisabled />
        </Styled.InputsContainer>
      </ComponentInfoItem>

      <ComponentInfoItem title="Prefix and suffix" description="Inputs can even have prefix and suffix!">
        <Styled.InputsContainer>
          <TextInput
            name="with-prefix"
            onChange={(val: string) => setValues({ ...values, prefix: val })}
            value={values.prefix}
            placeholder="Placeholder"
            prefix={<Styled.CodeIcon />}
          />
          <TextInput
            name="with-suffix"
            onChange={(val: string) => setValues({ ...values, suffix: val })}
            value={values.suffix}
            placeholder="Placeholder"
            suffix={<Styled.CodeIcon />}
          />
        </Styled.InputsContainer>
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default TextInputPage;
