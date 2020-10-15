import React, { useMemo } from 'react';
import PT from 'prop-types';

import { intrinsicComponent, orUndefined } from '@brix-ui/utils/functions';
import useInputValue from '@brix-ui/hooks/use-input-value';
import useAriaProps from '@brix-ui/hooks/use-aria-props';
import useEventProps from '@brix-ui/hooks/use-event-props';
import { formComponent, refProp, stylableComponent } from '@brix-ui/prop-types/common';

import type { TextAreaProps } from './text-area.props';
import Styled from './text-area.styles';

const TextArea = intrinsicComponent<TextAreaProps, HTMLTextAreaElement>(function TextArea(
  {
    value,
    defaultValue,
    onChange,
    autoComplete,
    autoFocus,
    rows,
    cols,
    form,
    maxLength,
    minLength,
    name,
    id,
    placeholder,
    spellCheck,
    wrap,
    resize,
    containerRef,
    showSymbolsLeft,
    isDisabled,
    isRequired,
    isInvalid,
    isReadonly,
    ...props
  },
  ref
) {
  const [internalValue, handleChange] = useInputValue(
    (value === undefined ? defaultValue : value) ?? '',
    onChange,
    ({ target: { value: inputValue } }) => inputValue
  );

  const { propsWithAria, propsWithoutAria } = useAriaProps(props);
  const { propsWithEvents, propsWithoutEvents } = useEventProps(propsWithoutAria);

  const symbolsLeft = useMemo(() => {
    if (maxLength && showSymbolsLeft) {
      return maxLength - `${internalValue}`.length;
    }

    return 0;
  }, [`${internalValue}`.length, showSymbolsLeft, maxLength]);

  return (
    <Styled.Label
      ref={containerRef}
      className="text-area-label"
      aria-disabled={orUndefined(isDisabled)}
      aria-readonly={orUndefined(isReadonly)}
      aria-invalid={orUndefined(isInvalid)}
      aria-hidden
      {...propsWithoutEvents}
    >
      <Styled.TextArea
        ref={ref}
        className="text-area"
        value={internalValue}
        onChange={handleChange}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        rows={rows}
        cols={cols}
        form={form}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        id={id}
        placeholder={placeholder}
        spellCheck={spellCheck}
        wrap={wrap}
        resize={resize}
        disabled={isDisabled}
        aria-disabled={orUndefined(isDisabled)}
        required={isRequired}
        aria-required={orUndefined(isRequired)}
        readOnly={isReadonly}
        aria-readonly={orUndefined(isReadonly)}
        aria-invalid={orUndefined(isInvalid)}
        {...propsWithAria}
        {...propsWithEvents}
      />

      {showSymbolsLeft && maxLength && (
        <Styled.SymbolsLeft className="text-area-symbols-left" data-resize={orUndefined(resize)}>
          {symbolsLeft} / {maxLength}
        </Styled.SymbolsLeft>
      )}
    </Styled.Label>
  );
});

TextArea.propTypes = {
  resize: PT.oneOf(['both', 'horizontal', 'vertical']),
  showSymbolsLeft: PT.bool,
  containerRef: refProp<HTMLLabelElement>(),

  ...formComponent(PT.oneOfType([PT.string, PT.number, PT.arrayOf(PT.string.isRequired)])),
  ...stylableComponent(),
};

export default TextArea;
