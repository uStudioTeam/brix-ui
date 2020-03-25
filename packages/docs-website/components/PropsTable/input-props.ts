const tooltip = 'Must be passed directly or implicitly';

export const inputProps = (valueType: string) => ({
  id: {
    type: '`string`',
  },
  name: {
    type: '`string`',
  },
  value: {
    type: `\`${valueType}\``,
    required: true,
    tooltip,
  },
  onChange: {
    type: `\`(value: ${valueType}) => void\``,
    required: true,
    tooltip,
  },
  defaultValue: {
    type: `\`${valueType}\``,
  },
  isRequired: {
    type: '`boolean`',
    defaultValue: '`false`',
  },
  isDisabled: {
    type: '`boolean`',
    defaultValue: '`false`',
  },
});
