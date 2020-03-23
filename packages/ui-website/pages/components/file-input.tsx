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

    display: grid;
    grid-auto-flow: column;
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
            label="Default"
            onChange={(val: any) => setValues({ ...values, default: val })}
            value={values.default}
            placeholder="Placeholder"
            isRequired
          />
          <FileInput label="Disabled" placeholder="Placeholder" isDisabled />
        </Styled.InputsContainer>
      </ComponentInfoItem>

      <ComponentInfoItem title="Prefix and suffix" description="Inputs can even have prefix and suffix!">
        <Styled.InputsContainer>
          <FileInput
            label="With prefix"
            onChange={(val: FileList) => setValues({ ...values, prefix: val })}
            value={values.prefix}
            prefix={<Styled.CodeIcon />}
            placeholder="Placeholder"
          />
          <FileInput
            label="With suffix"
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
            label="Multiple"
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
