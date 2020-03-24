import React from 'react';

import { FileInput } from '@ustudio/ui';

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
    width: 100%;

    display: grid;
    grid-auto-flow: row;
    grid-gap: var(--i-large);
  `,
};

Styled.CodeIcon.displayName = 'Icon';
Styled.InputsContainer.displayName = 'Container';

const FileInputPage = () => {
  interface Values {
    default?: FileList;
    prefix?: FileList;
    suffix?: FileList;
    multiple?: FileList;
  }

  const [values, setValues] = React.useState({} as Values);

  return (
    <ComponentInfo
      name="FileInput"
      description={`
Allows uploading one or multiple files.

${controlledInputDescription('File input')}.`}
      props={{
        ...inputProps('FileList'),
        multiple: {
          type: '`boolean`',
          defaultValue: '`false`',
        },
        buttonValue: {
          type: '`string`',
          defaultValue: `\`'Upload'\``,
        },
        prefix: {
          type: '`ReactNode`',
        },
        suffix: { type: '`ReactNode`' },
      }}
      classNames={[
        'HiddenFileInput',
        'FileInput',
        'FileInputButton',
        'FileInputContainer',
        'FileInputWrapper',
        'Prefix',
        'Suffix',
      ]}
    >
      <ComponentInfoItem>
        <Styled.InputsContainer>
          <FileInput
            name="default"
            onChange={(val: any) => setValues({ ...values, default: val })}
            value={values.default}
            placeholder="Placeholder"
            isRequired
          />
          <FileInput name="disabled" placeholder="Placeholder" isDisabled />
        </Styled.InputsContainer>
      </ComponentInfoItem>

      <ComponentInfoItem title="Prefix and suffix" description="Inputs can even have prefix and suffix!">
        <Styled.InputsContainer>
          <FileInput
            name="with-prefix"
            onChange={(val: FileList) => setValues({ ...values, prefix: val })}
            value={values.prefix}
            prefix={<Styled.CodeIcon />}
            placeholder="Placeholder"
          />
          <FileInput
            name="with-suffix"
            onChange={(val: FileList) => setValues({ ...values, suffix: val })}
            value={values.suffix}
            suffix={<Styled.CodeIcon />}
            placeholder="Placeholder"
          />
        </Styled.InputsContainer>
      </ComponentInfoItem>

      <ComponentInfoItem title="Multiple" description="Upload multiple files at once.">
        <Styled.InputsContainer>
          <FileInput
            name="multiple"
            onChange={(val: FileList) => setValues({ ...values, multiple: val })}
            value={values.multiple}
            placeholder="Placeholder"
            multiple
          />
        </Styled.InputsContainer>
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default FileInputPage;
