import React from 'react';

import { Grid, Cell, Select } from '@ustudio/ui';

import { ComponentInfo, ComponentInfoItem, inputProps } from '../../components';
import { controlledInputDescription } from '../../utils';

const SingleSelectPage = () => {
  const [valueSelected, setValueSelected] = React.useState<undefined | string>(undefined);

  const items = {
    '1': { value: '1', label: 'Item 1' },
    '2': { value: '2', label: 'Item 2' },
    '3': { value: '3', label: 'Item 3' },
    '4': { value: '4', label: 'Item 4', isDisabled: true },
    '5': { value: '5', label: 'Item 5' },
    '6': { value: '6', label: 'Item 6', isDefault: true },
    '7': { value: '7', label: 'Item 7' },
    '8': { value: '8', label: 'Item 8' },
    '9': { value: '9', label: 'Item 9' },
  };
  const groups = [{ title: 'Group 1', items }];

  return (
    <ComponentInfo
      name="Select"
      description={`
Allows selecting one option from the list. Use with either 'items' or 'groups'.

${controlledInputDescription('Single select')}.`}
      props={{
        items: {
          type: `
          {
            [value: string]: {
              value: string;
              label: string;
              isDisabled?: boolean;
              isDefault?: boolean;
            }
          }`,
          description: "Available and required if 'groups' prop is not set",
        },
        groups: {
          type: `
          {
            title: string;
            items: Items;
          }`,
          description: "Available and required if 'items' prop is not set",
        },
        ...inputProps('string'),
      }}
      classNames={[
        'SelectContainer',
        'Overlay',
        'Label',
        'Select',
        'SelectIcon',
        'Dropdown',
        'ValuesList',
        'ValuesListTitle',
        'ValuesListItem',
        'ValuesListIcon',
      ]}
    >
      <ComponentInfoItem>
        <Grid xs={{ gap: 16 }}>
          <Cell>
            <Select
              items={items}
              value={valueSelected}
              label="Default select"
              onChange={(item: React.SetStateAction<string | undefined>) => setValueSelected(item)}
            />
          </Cell>
          <Cell>
            <Select
              groups={groups}
              value={valueSelected}
              label="Group select"
              onChange={(item: React.SetStateAction<string | undefined>) => setValueSelected(item)}
            />
          </Cell>
          <Cell>
            <Select
              items={items}
              value={valueSelected}
              isDisabled
              label="Disabled select"
              onChange={(item: React.SetStateAction<string | undefined>) => setValueSelected(item)}
            />
          </Cell>
        </Grid>
      </ComponentInfoItem>
    </ComponentInfo>
  );
};

export default SingleSelectPage;
