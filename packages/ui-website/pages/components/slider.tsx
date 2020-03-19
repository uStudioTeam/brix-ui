import React from 'react';

import { Slider } from '@ustudio/ui';

import { ComponentInfo, ComponentInfoItem, inputProps } from '../../components';
import { controlledInputDescription } from '../../utils';

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
      classNames={['StepContainer', 'Step', 'Container', 'InputContainer', 'HelperContainer', 'Helper', 'Line']}
    >
      <ComponentInfoItem>
        <Slider
          label="Slider"
          value={values.default}
          onChange={(val: number) => setValues({ ...values, default: val })}
          isRequired
        />

        <Slider label="Disabled" value={54} isDisabled />
      </ComponentInfoItem>

      <ComponentInfoItem title="With displayed steps">
        <Slider
          label="Steps"
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
