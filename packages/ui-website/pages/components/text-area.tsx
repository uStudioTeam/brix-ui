import { Mixin } from '@ustudio/ui/theme';
import React from 'react';
import styled, { css } from 'styled-components';

import { TextArea } from '@ustudio/ui';

import { ComponentInfo, ComponentInfoItem, inputProps } from '../../components';
import { controlledInputDescription } from '../../utils';

const Styled = {
  InputsContainer: styled.div`
    flex: 1;

    display: grid;
    grid-auto-flow: row;
    grid-gap: var(--i-large);

    ${Mixin.Screen.md(css`
      grid-auto-flow: column;
    `)}
  `,
};

Styled.InputsContainer.displayName = 'Container';

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
        <Styled.InputsContainer>
          <TextArea
            name="text-area"
            onChange={(val: string) => setValues({ ...values, default: val })}
            value={values.default}
            placeholder="Placeholder"
            isRequired
          />
          <TextArea name="disabled" placeholder="Placeholder" isDisabled />
        </Styled.InputsContainer>
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default TextAreaPage;
