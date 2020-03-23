import React from 'react';

import { Slider } from '@ustudio/ui';
import styled from 'styled-components';

import { ComponentInfo, ComponentInfoItem, inputProps } from '../../components';
import { controlledInputDescription } from '../../utils';

const Styled = {
  InputsContainer: styled.div`
    flex: 1;

    display: grid;
    grid-auto-flow: column;
    grid-gap: var(--i-large);
  `,
};

Styled.InputsContainer.displayName = 'Container';

const SliderPage = () => {
  interface Values {
    default: number;
    steps: number;
  }

  const [values, setValues] = React.useState({ default: 2, steps: 10 } as Values);

  return (
    <ComponentInfo
      name="Slider"
      description={`
Allows selecting a value in a certain range.

${controlledInputDescription('Text input')}.`}
      props={{
        ...inputProps('number'),
        step: { type: '`number`' },
        min: { type: '`number`', defaultValue: '`0`' },
        max: { type: '`number`', defaultValue: '`100`' },
        displayValue: { type: '`boolean`', defaultValue: '`true`' },
        displaySteps: { type: '`boolean`', defaultValue: '`false`' },
        stepLabels: {
          type: `
          {
            [value: number]:
                {
                  label?: string;
                  isDisplayed?: boolean;
                }
          }`,
        },
      }}
      classNames={['StepContainer', 'Step', 'SliderContainer', 'InputContainer', 'HelperContainer', 'Helper', 'Line']}
    >
      <ComponentInfoItem>
        <Styled.InputsContainer>
          <Slider
            name="Slider"
            value={values.default}
            onChange={(val: number) => setValues({ ...values, default: val })}
            isRequired
          />

          <Slider name="Disabled" value={54} isDisabled />
        </Styled.InputsContainer>
      </ComponentInfoItem>

      <ComponentInfoItem title="With displayed steps">
        <Slider
          name="Steps"
          min={0}
          max={20}
          step={5}
          displaySteps
          stepLabels={{
            10: {
              label: 'Middle',
            },
          }}
          value={values.steps}
          onChange={(val: number) => setValues({ ...values, steps: val })}
        />
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default SliderPage;
